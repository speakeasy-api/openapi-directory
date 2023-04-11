import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackReservationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    rackReservation?: shared.RackReservation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

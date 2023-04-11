import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackReservationsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack reservation.
     */
    id: number;
}
export declare class DcimRackReservationsReadResponse extends SpeakeasyBase {
    contentType: string;
    rackReservation?: shared.RackReservation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

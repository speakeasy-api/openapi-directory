import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlertsResponse extends SpeakeasyBase {
    /**
     * The users alerts.
     */
    alerts?: shared.Alert[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

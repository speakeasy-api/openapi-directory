import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAlertRequest extends SpeakeasyBase {
    /**
     * The ID of the email alert to delete.
     */
    alertId: string;
}
export declare class DeleteAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnsubscribeNotificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter | Failed to delete subscription
     */
    error?: shared.ErrorT;
    /**
     * Deleted notification subscription information
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

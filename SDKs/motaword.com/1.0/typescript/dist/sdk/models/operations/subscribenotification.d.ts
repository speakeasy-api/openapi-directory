import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscribeNotificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingParameter | Failed to save subscription
     */
    error?: shared.ErrorT;
    /**
     * Saved notification subscription information
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

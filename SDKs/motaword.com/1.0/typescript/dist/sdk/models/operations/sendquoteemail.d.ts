import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendQuoteEmailRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
}
export declare class SendQuoteEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Email sent successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

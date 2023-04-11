import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    /**
     * Webhook ID
     */
    webhookId: string;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successful.
     */
    emptyResponseBody?: string;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}

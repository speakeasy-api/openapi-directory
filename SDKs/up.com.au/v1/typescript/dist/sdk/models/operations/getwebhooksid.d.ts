import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier for the webhook.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class GetWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    getWebhookResponse?: shared.GetWebhookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

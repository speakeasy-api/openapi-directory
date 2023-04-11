import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier for the webhook.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class DeleteWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

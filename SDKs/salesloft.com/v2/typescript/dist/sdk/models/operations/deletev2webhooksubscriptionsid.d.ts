import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2WebhookSubscriptionsIdRequest extends SpeakeasyBase {
    /**
     * The id of the Webhook Subscription to delete
     */
    id: number;
}
export declare class DeleteV2WebhookSubscriptionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

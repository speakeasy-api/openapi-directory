import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    createWebhookResponse?: shared.CreateWebhookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

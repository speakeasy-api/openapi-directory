import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetWebhookConfigForRepoRequest extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetWebhookConfigForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    webhookConfig?: shared.WebhookConfig;
}

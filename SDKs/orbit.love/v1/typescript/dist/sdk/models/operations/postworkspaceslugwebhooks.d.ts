import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspaceSlugWebhooksSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PostWorkspaceSlugWebhooksRequest extends SpeakeasyBase {
    webhookSubscription?: shared.WebhookSubscription;
    workspaceSlug: string;
}
export declare class PostWorkspaceSlugWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

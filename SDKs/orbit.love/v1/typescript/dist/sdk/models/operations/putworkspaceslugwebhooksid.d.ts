import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkspaceSlugWebhooksIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PutWorkspaceSlugWebhooksIdRequest extends SpeakeasyBase {
    id: string;
    webhookSubscription?: shared.WebhookSubscription;
    workspaceSlug: string;
}
export declare class PutWorkspaceSlugWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

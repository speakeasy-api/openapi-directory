import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugWebhooksSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugWebhooksRequest extends SpeakeasyBase {
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

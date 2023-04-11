import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugWebhooksIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugWebhooksIdRequest extends SpeakeasyBase {
    id: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

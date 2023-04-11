import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspaceSlugWebhooksIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class DeleteWorkspaceSlugWebhooksIdRequest extends SpeakeasyBase {
    id: string;
    workspaceSlug: string;
}
export declare class DeleteWorkspaceSlugWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

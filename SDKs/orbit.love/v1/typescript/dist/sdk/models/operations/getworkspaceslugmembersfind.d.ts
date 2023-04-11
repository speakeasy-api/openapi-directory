import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugMembersFindSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugMembersFindRequest extends SpeakeasyBase {
    email?: string;
    /**
     * Deprecated, please use source=github and username=<username> instead
     */
    github?: string;
    source?: string;
    sourceHost?: string;
    uid?: string;
    username?: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugMembersFindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

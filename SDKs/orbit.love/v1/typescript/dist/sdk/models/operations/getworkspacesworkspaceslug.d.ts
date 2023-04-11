import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspaceSlugSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspacesWorkspaceSlugRequest extends SpeakeasyBase {
    /**
     * Include the number of members by Orbit Level in the attributes
     */
    includeOrbitLevelCounts?: boolean;
    workspaceSlug: string;
}
export declare class GetWorkspacesWorkspaceSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

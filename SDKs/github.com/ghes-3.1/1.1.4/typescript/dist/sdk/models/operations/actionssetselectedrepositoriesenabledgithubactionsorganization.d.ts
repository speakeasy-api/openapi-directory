import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody extends SpeakeasyBase {
    /**
     * List of repository IDs to enable for GitHub Actions.
     */
    selectedRepositoryIds: number[];
}
export declare class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
    requestBody: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

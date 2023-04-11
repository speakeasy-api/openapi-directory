import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.Repository[];
    totalCount: number;
}
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject?: ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON;
}

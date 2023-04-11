import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsListExternalIdpGroupsForOrgRequest extends SpeakeasyBase {
    /**
     * Limits the list to groups containing the text in the group name
     */
    displayName?: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page token
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class TeamsListExternalIdpGroupsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    externalGroups?: shared.ExternalGroups;
}

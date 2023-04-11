import { SpeakeasyBase } from "../../../internal/utils";
import { XpnResourceId } from "./xpnresourceid";
/**
 * Successful response
 */
export declare class ProjectsGetXpnResources extends SpeakeasyBase {
    /**
     * [Output Only] Type of resource. Always compute#projectsGetXpnResources for lists of service resources (a.k.a service projects)
     */
    kind?: string;
    /**
     * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
     */
    nextPageToken?: string;
    /**
     * Service resources (a.k.a service projects) attached to this project as their shared VPC host.
     */
    resources?: XpnResourceId[];
}

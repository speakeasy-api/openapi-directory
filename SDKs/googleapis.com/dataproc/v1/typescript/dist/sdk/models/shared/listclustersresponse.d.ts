import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * The list of all clusters in a project.
 */
export declare class ListClustersResponse extends SpeakeasyBase {
    /**
     * Output only. The clusters in the project.
     */
    clusters?: Cluster[];
    /**
     * Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest.
     */
    nextPageToken?: string;
}

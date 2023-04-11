import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1EntityReference } from "./googleclouddatacataloglineagev1entityreference";
/**
 * Request message for SearchLinks.
 */
export declare class GoogleCloudDatacatalogLineageV1SearchLinksRequest extends SpeakeasyBase {
    /**
     * Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100.
     */
    pageSize?: number;
    /**
     * Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.
     */
    pageToken?: string;
    /**
     * The soft reference to everything you can attach a lineage event to.
     */
    source?: GoogleCloudDatacatalogLineageV1EntityReference;
    /**
     * The soft reference to everything you can attach a lineage event to.
     */
    target?: GoogleCloudDatacatalogLineageV1EntityReference;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SearchCatalogResult } from "./googleclouddatacatalogv1beta1searchcatalogresult";
/**
 * Response message for SearchCatalog.
 */
export declare class GoogleCloudDatacatalogV1beta1SearchCatalogResponse extends SpeakeasyBase {
    /**
     * The token that can be used to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * Search results.
     */
    results?: GoogleCloudDatacatalogV1beta1SearchCatalogResult[];
    /**
     * Unreachable locations. Search result does not include data from those locations. Users can get additional information on the error by repeating the search request with a more restrictive parameter -- setting the value for `SearchDataCatalogRequest.scope.restricted_locations`.
     */
    unreachable?: string[];
}

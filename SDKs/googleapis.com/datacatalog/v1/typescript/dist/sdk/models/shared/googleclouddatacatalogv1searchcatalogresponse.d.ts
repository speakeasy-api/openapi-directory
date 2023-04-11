import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SearchCatalogResult } from "./googleclouddatacatalogv1searchcatalogresult";
/**
 * Response message for SearchCatalog.
 */
export declare class GoogleCloudDatacatalogV1SearchCatalogResponse extends SpeakeasyBase {
    /**
     * Pagination token that can be used in subsequent calls to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * Search results.
     */
    results?: GoogleCloudDatacatalogV1SearchCatalogResult[];
    /**
     * Unreachable locations. Search results don't include data from those locations. To get additional information on an error, repeat the search request and restrict it to specific locations by setting the `SearchCatalogRequest.scope.restricted_locations` parameter.
     */
    unreachable?: string[];
}

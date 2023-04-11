import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0
 */
export declare enum FacetsSortKeysEnum {
    ScoreDesc = "score,,desc",
    SpatialAreaAsc = "spatial_area,,asc",
    SpatialAreaDesc = "spatial_area,,desc",
    TemporalDurationAsc = "temporal_duration,,asc",
    TemporalDurationDesc = "temporal_duration,,desc",
    UpdatedDesc = "updated,,desc"
}
/**
 * Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
 */
export declare enum FacetsSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}
export declare class FacetsRequest extends SpeakeasyBase {
    /**
     * The number of search results per page desired by the client; OpenSearch 1.1
     */
    count?: number;
    /**
     * The end date in yyyy-mm-dd format
     */
    endDate?: Date;
    /**
     * Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values
     */
    facetFilters?: string;
    /**
     * URL-encoded keyword or keywords desired by the client; OpenSearch 1.1
     */
    searchTerms?: string;
    /**
     * Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0
     */
    sortKeys?: FacetsSortKeysEnum;
    /**
     * Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
     */
    source?: FacetsSourceEnum;
    /**
     * 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter
     */
    spatial?: string;
    /**
     * The start date in yyyy-mm-dd format
     */
    startDate?: Date;
    /**
     * First search result desired by the search client; OpenSearch 1.1
     */
    startIndex?: number;
}
export declare class FacetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    facets200ApplicationNsidcfacetsPlusXmlString?: string;
}

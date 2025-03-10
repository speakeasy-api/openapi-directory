/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo - Information describing query expansion including whether expansion has occurred.
 */
public class GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo {
    /**
     * Bool describing whether query expansion has occurred.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandedQuery")
    public Boolean expandedQuery;

    public GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo withExpandedQuery(Boolean expandedQuery) {
        this.expandedQuery = expandedQuery;
        return this;
    }
    
    /**
     * Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pinnedResultCount")
    public String pinnedResultCount;

    public GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo withPinnedResultCount(String pinnedResultCount) {
        this.pinnedResultCount = pinnedResultCount;
        return this;
    }
    
    public GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo(){}
}

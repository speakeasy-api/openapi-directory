/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdvertisersListResponse - Advertiser List Response
 */
public class AdvertisersListResponse {
    /**
     * Advertiser collection.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisers")
    public Advertiser[] advertisers;

    public AdvertisersListResponse withAdvertisers(Advertiser[] advertisers) {
        this.advertisers = advertisers;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public AdvertisersListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * Pagination token to be used for the next list operation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public AdvertisersListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    public AdvertisersListResponse(){}
}

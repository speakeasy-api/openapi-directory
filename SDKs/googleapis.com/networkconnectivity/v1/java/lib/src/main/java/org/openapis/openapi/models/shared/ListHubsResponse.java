/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListHubsResponse - Response for HubService.ListHubs method.
 */
public class ListHubsResponse {
    /**
     * The requested hubs.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hubs")
    public Hub[] hubs;

    public ListHubsResponse withHubs(Hub[] hubs) {
        this.hubs = hubs;
        return this;
    }
    
    /**
     * The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListHubsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * Locations that could not be reached.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;

    public ListHubsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
    
    public ListHubsResponse(){}
}

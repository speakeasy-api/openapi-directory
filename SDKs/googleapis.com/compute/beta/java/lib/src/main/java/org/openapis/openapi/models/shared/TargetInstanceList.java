/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TargetInstanceList - Contains a list of TargetInstance resources.
 */
public class TargetInstanceList {
    /**
     * [Output Only] Unique identifier for the resource; defined by the server.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public TargetInstanceList withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * A list of TargetInstance resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public TargetInstance[] items;

    public TargetInstanceList withItems(TargetInstance[] items) {
        this.items = items;
        return this;
    }
    
    /**
     * Type of resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public TargetInstanceList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public TargetInstanceList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * [Output Only] Server-defined URL for this resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;

    public TargetInstanceList withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    
    /**
     * [Output Only] Informational warning message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public TargetInstanceListWarning warning;

    public TargetInstanceList withWarning(TargetInstanceListWarning warning) {
        this.warning = warning;
        return this;
    }
    
    public TargetInstanceList(){}
}

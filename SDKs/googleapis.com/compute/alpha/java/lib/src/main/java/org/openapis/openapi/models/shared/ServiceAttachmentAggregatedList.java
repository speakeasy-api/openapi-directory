/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceAttachmentAggregatedList - Contains a list of ServiceAttachmentsScopedList.
 */
public class ServiceAttachmentAggregatedList {
    /**
     * [Output Only] Unique identifier for the resource; defined by the server.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public ServiceAttachmentAggregatedList withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * A list of ServiceAttachmentsScopedList resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public java.util.Map<String, ServiceAttachmentsScopedList> items;

    public ServiceAttachmentAggregatedList withItems(java.util.Map<String, ServiceAttachmentsScopedList> items) {
        this.items = items;
        return this;
    }
    
    /**
     * Type of resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public ServiceAttachmentAggregatedList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ServiceAttachmentAggregatedList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * [Output Only] Server-defined URL for this resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;

    public ServiceAttachmentAggregatedList withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    
    /**
     * [Output Only] Unreachable resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachables")
    public String[] unreachables;

    public ServiceAttachmentAggregatedList withUnreachables(String[] unreachables) {
        this.unreachables = unreachables;
        return this;
    }
    
    /**
     * [Output Only] Informational warning message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public ServiceAttachmentAggregatedListWarning warning;

    public ServiceAttachmentAggregatedList withWarning(ServiceAttachmentAggregatedListWarning warning) {
        this.warning = warning;
        return this;
    }
    
    public ServiceAttachmentAggregatedList(){}
}

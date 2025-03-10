/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceAttachmentList - Successful response
 */
public class ServiceAttachmentList {
    /**
     * [Output Only] Unique identifier for the resource; defined by the server.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public ServiceAttachmentList withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * A list of ServiceAttachment resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ServiceAttachment[] items;

    public ServiceAttachmentList withItems(ServiceAttachment[] items) {
        this.items = items;
        return this;
    }
    
    /**
     * [Output Only] Type of the resource. Always compute#serviceAttachment for service attachments.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public ServiceAttachmentList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ServiceAttachmentList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * [Output Only] Server-defined URL for this resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;

    public ServiceAttachmentList withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    
    /**
     * [Output Only] Informational warning message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public ServiceAttachmentListWarning warning;

    public ServiceAttachmentList withWarning(ServiceAttachmentListWarning warning) {
        this.warning = warning;
        return this;
    }
    
    public ServiceAttachmentList(){}
}

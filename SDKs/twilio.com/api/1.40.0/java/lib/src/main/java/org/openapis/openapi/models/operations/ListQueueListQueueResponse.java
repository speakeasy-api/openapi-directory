/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListQueueListQueueResponse - OK
 */
public class ListQueueListQueueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public ListQueueListQueueResponse withEnd(Long end) {
        this.end = end;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_page_uri")
    public String firstPageUri;
    public ListQueueListQueueResponse withFirstPageUri(String firstPageUri) {
        this.firstPageUri = firstPageUri;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_uri")
    public String nextPageUri;
    public ListQueueListQueueResponse withNextPageUri(String nextPageUri) {
        this.nextPageUri = nextPageUri;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ListQueueListQueueResponse withPage(Long page) {
        this.page = page;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ListQueueListQueueResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_page_uri")
    public String previousPageUri;
    public ListQueueListQueueResponse withPreviousPageUri(String previousPageUri) {
        this.previousPageUri = previousPageUri;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queues")
    public org.openapis.openapi.models.shared.ApiV2010AccountQueue[] queues;
    public ListQueueListQueueResponse withQueues(org.openapis.openapi.models.shared.ApiV2010AccountQueue[] queues) {
        this.queues = queues;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Long start;
    public ListQueueListQueueResponse withStart(Long start) {
        this.start = start;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListQueueListQueueResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
    
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ComputeInterconnectAttachmentsAggregatedListResponse {
    
    public String contentType;

    public ComputeInterconnectAttachmentsAggregatedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.InterconnectAttachmentAggregatedList interconnectAttachmentAggregatedList;

    public ComputeInterconnectAttachmentsAggregatedListResponse withInterconnectAttachmentAggregatedList(org.openapis.openapi.models.shared.InterconnectAttachmentAggregatedList interconnectAttachmentAggregatedList) {
        this.interconnectAttachmentAggregatedList = interconnectAttachmentAggregatedList;
        return this;
    }
    
    
    public Integer statusCode;

    public ComputeInterconnectAttachmentsAggregatedListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ComputeInterconnectAttachmentsAggregatedListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ComputeInterconnectAttachmentsAggregatedListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

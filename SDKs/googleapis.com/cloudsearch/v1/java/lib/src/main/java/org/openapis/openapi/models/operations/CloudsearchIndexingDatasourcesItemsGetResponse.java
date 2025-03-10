/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CloudsearchIndexingDatasourcesItemsGetResponse {
    
    public String contentType;

    public CloudsearchIndexingDatasourcesItemsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Item item;

    public CloudsearchIndexingDatasourcesItemsGetResponse withItem(org.openapis.openapi.models.shared.Item item) {
        this.item = item;
        return this;
    }
    
    
    public Integer statusCode;

    public CloudsearchIndexingDatasourcesItemsGetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CloudsearchIndexingDatasourcesItemsGetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CloudsearchIndexingDatasourcesItemsGetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

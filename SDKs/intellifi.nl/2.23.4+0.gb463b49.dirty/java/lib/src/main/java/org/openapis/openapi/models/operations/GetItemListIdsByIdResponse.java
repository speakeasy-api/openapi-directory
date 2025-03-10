/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetItemListIdsByIdResponse {
    
    public String contentType;

    public GetItemListIdsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * An array object containing the item ids for this list
     */
    
    public String[] listOfItemIds;

    public GetItemListIdsByIdResponse withListOfItemIds(String[] listOfItemIds) {
        this.listOfItemIds = listOfItemIds;
        return this;
    }
    
    
    public Integer statusCode;

    public GetItemListIdsByIdResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetItemListIdsByIdResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetItemListIdsByIdResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

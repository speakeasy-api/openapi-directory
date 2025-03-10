/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetEditorialImageLivefeedItemsResponse {
    
    public String contentType;

    public GetEditorialImageLivefeedItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.EditorialImageContentDataList editorialImageContentDataList;

    public GetEditorialImageLivefeedItemsResponse withEditorialImageContentDataList(org.openapis.openapi.models.shared.EditorialImageContentDataList editorialImageContentDataList) {
        this.editorialImageContentDataList = editorialImageContentDataList;
        return this;
    }
    
    
    public Integer statusCode;

    public GetEditorialImageLivefeedItemsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetEditorialImageLivefeedItemsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetEditorialImageLivefeedItemsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

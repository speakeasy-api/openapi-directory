/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ContentConversionsourcesPatchResponse {
    
    public String contentType;

    public ContentConversionsourcesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ConversionSource conversionSource;

    public ContentConversionsourcesPatchResponse withConversionSource(org.openapis.openapi.models.shared.ConversionSource conversionSource) {
        this.conversionSource = conversionSource;
        return this;
    }
    
    
    public Integer statusCode;

    public ContentConversionsourcesPatchResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ContentConversionsourcesPatchResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ContentConversionsourcesPatchResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

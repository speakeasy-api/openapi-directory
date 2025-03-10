/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class MetaGetOctocatResponse {
    
    public String contentType;

    public MetaGetOctocatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public MetaGetOctocatResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public MetaGetOctocatResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public String metaGetOctocat200ApplicationOctocatStreamString;

    public MetaGetOctocatResponse withMetaGetOctocat200ApplicationOctocatStreamString(String metaGetOctocat200ApplicationOctocatStreamString) {
        this.metaGetOctocat200ApplicationOctocatStreamString = metaGetOctocat200ApplicationOctocatStreamString;
        return this;
    }
    
    public MetaGetOctocatResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

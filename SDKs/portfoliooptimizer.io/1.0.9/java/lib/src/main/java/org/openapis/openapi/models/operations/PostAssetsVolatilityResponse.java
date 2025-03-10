/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostAssetsVolatilityResponse {
    
    public String contentType;

    public PostAssetsVolatilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public PostAssetsVolatilityResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostAssetsVolatilityResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * OK
     */
    
    public PostAssetsVolatility200ApplicationJSON postAssetsVolatility200ApplicationJSONObject;

    public PostAssetsVolatilityResponse withPostAssetsVolatility200ApplicationJSONObject(PostAssetsVolatility200ApplicationJSON postAssetsVolatility200ApplicationJSONObject) {
        this.postAssetsVolatility200ApplicationJSONObject = postAssetsVolatility200ApplicationJSONObject;
        return this;
    }
    
    public PostAssetsVolatilityResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

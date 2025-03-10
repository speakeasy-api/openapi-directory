/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetBuyOrderOfWorkgroupResponse {
    
    public byte[] body;

    public GetBuyOrderOfWorkgroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public GetBuyOrderOfWorkgroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * There are not any result matching your search condition
     */
    
    public org.openapis.openapi.models.shared.HTTPStatusVO httpStatusVO;

    public GetBuyOrderOfWorkgroupResponse withHTTPStatusVO(org.openapis.openapi.models.shared.HTTPStatusVO httpStatusVO) {
        this.httpStatusVO = httpStatusVO;
        return this;
    }
    
    /**
     * Successful retrieval
     */
    
    public org.openapis.openapi.models.shared.OrderExpandWorkgroupLevelVO orderExpandWorkgroupLevelVO;

    public GetBuyOrderOfWorkgroupResponse withOrderExpandWorkgroupLevelVO(org.openapis.openapi.models.shared.OrderExpandWorkgroupLevelVO orderExpandWorkgroupLevelVO) {
        this.orderExpandWorkgroupLevelVO = orderExpandWorkgroupLevelVO;
        return this;
    }
    
    
    public Integer statusCode;

    public GetBuyOrderOfWorkgroupResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetBuyOrderOfWorkgroupResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetBuyOrderOfWorkgroupResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class LandlordControllerGetAccountsResponse {
    
    public String contentType;

    public LandlordControllerGetAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.LandlordAccountingModel landlordAccountingModel;

    public LandlordControllerGetAccountsResponse withLandlordAccountingModel(org.openapis.openapi.models.shared.LandlordAccountingModel landlordAccountingModel) {
        this.landlordAccountingModel = landlordAccountingModel;
        return this;
    }
    
    
    public Integer statusCode;

    public LandlordControllerGetAccountsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public LandlordControllerGetAccountsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public LandlordControllerGetAccountsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

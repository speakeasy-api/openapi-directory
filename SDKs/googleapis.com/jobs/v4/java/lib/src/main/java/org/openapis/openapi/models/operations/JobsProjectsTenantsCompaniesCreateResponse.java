/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class JobsProjectsTenantsCompaniesCreateResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Company company;

    public JobsProjectsTenantsCompaniesCreateResponse withCompany(org.openapis.openapi.models.shared.Company company) {
        this.company = company;
        return this;
    }
    
    
    public String contentType;

    public JobsProjectsTenantsCompaniesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public JobsProjectsTenantsCompaniesCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public JobsProjectsTenantsCompaniesCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public JobsProjectsTenantsCompaniesCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

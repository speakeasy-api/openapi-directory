/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class LicensingLicenseAssignmentsListForProductResponse {
    
    public String contentType;

    public LicensingLicenseAssignmentsListForProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.LicenseAssignmentList licenseAssignmentList;

    public LicensingLicenseAssignmentsListForProductResponse withLicenseAssignmentList(org.openapis.openapi.models.shared.LicenseAssignmentList licenseAssignmentList) {
        this.licenseAssignmentList = licenseAssignmentList;
        return this;
    }
    
    
    public Integer statusCode;

    public LicensingLicenseAssignmentsListForProductResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public LicensingLicenseAssignmentsListForProductResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public LicensingLicenseAssignmentsListForProductResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

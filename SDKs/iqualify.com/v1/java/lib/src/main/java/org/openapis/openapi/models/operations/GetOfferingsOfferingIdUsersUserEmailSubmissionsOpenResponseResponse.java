/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse {
    /**
     * user open response submission and mark details
     */
    
    public org.openapis.openapi.models.shared.Assignments[] assignments;

    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withAssignments(org.openapis.openapi.models.shared.Assignments[] assignments) {
        this.assignments = assignments;
        return this;
    }
    
    
    public String contentType;

    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public Integer statusCode;

    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

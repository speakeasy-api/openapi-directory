/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class OrgsRemoveOutsideCollaboratorResponse {
    
    public String contentType;

    public OrgsRemoveOutsideCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public OrgsRemoveOutsideCollaboratorResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public OrgsRemoveOutsideCollaboratorResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Unprocessable Entity if user is a member of the organization
     */
    
    public OrgsRemoveOutsideCollaborator422ApplicationJSON orgsRemoveOutsideCollaborator422ApplicationJSONObject;

    public OrgsRemoveOutsideCollaboratorResponse withOrgsRemoveOutsideCollaborator422ApplicationJSONObject(OrgsRemoveOutsideCollaborator422ApplicationJSON orgsRemoveOutsideCollaborator422ApplicationJSONObject) {
        this.orgsRemoveOutsideCollaborator422ApplicationJSONObject = orgsRemoveOutsideCollaborator422ApplicationJSONObject;
        return this;
    }
    
    public OrgsRemoveOutsideCollaboratorResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}

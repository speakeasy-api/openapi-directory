/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class DiscoveryReceivesResponse {
    public String contentType;
    public DiscoveryReceivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Success
     */
    public org.openapis.openapi.models.shared.DiscoveredParticipant discoveredParticipant;
    public DiscoveryReceivesResponse withDiscoveredParticipant(org.openapis.openapi.models.shared.DiscoveredParticipant discoveredParticipant) {
        this.discoveredParticipant = discoveredParticipant;
        return this;
    }
    
    /**
     * Unprocessable Entity
     */
    public org.openapis.openapi.models.shared.ErrorModel[] errorModels;
    public DiscoveryReceivesResponse withErrorModels(org.openapis.openapi.models.shared.ErrorModel[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    
    public Integer statusCode;
    public DiscoveryReceivesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    public HttpResponse<byte[]> rawResponse;
    public DiscoveryReceivesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
}

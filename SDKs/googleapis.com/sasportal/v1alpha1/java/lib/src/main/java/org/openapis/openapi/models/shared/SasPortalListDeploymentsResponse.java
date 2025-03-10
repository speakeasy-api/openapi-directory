/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SasPortalListDeploymentsResponse - Response for ListDeployments.
 */
public class SasPortalListDeploymentsResponse {
    /**
     * The deployments that match the request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public SasPortalDeployment[] deployments;

    public SasPortalListDeploymentsResponse withDeployments(SasPortalDeployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    
    /**
     * A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public SasPortalListDeploymentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    public SasPortalListDeploymentsResponse(){}
}

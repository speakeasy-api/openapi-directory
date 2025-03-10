/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAssignedLocationsResponse - Response message for AssignedLocationService.ListAssignedLocations.
 */
public class ListAssignedLocationsResponse {
    /**
     * The list of assigned locations. This list will be absent if empty.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedLocations")
    public AssignedLocation[] assignedLocations;

    public ListAssignedLocationsResponse withAssignedLocations(AssignedLocation[] assignedLocations) {
        this.assignedLocations = assignedLocations;
        return this;
    }
    
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedLocations` method to retrieve the next page of results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListAssignedLocationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    public ListAssignedLocationsResponse(){}
}

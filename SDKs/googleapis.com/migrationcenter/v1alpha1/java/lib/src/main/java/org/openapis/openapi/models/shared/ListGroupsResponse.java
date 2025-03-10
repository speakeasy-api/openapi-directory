/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListGroupsResponse - A response for listing groups.
 */
public class ListGroupsResponse {
    /**
     * The list of Group
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public Group[] groups;

    public ListGroupsResponse withGroups(Group[] groups) {
        this.groups = groups;
        return this;
    }
    
    /**
     * A token identifying a page of results the server should return.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * Locations that could not be reached.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;

    public ListGroupsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
    
    public ListGroupsResponse(){}
}

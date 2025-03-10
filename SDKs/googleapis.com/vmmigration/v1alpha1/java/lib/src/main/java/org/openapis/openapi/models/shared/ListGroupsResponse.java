/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListGroupsResponse - Response message for 'ListGroups' request.
 */
public class ListGroupsResponse {
    /**
     * Output only. The list of groups response.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public Group[] groups;

    public ListGroupsResponse withGroups(Group[] groups) {
        this.groups = groups;
        return this;
    }
    
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * Output only. Locations that could not be reached.
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

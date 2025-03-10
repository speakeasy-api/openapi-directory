/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListVersionsResponse - Response with the list of the versions for the specified script project.
 */
public class ListVersionsResponse {
    /**
     * The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * The list of versions.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public Version[] versions;

    public ListVersionsResponse withVersions(Version[] versions) {
        this.versions = versions;
        return this;
    }
    
    public ListVersionsResponse(){}
}

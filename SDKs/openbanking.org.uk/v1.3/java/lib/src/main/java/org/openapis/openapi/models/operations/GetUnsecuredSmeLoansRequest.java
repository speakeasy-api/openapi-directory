/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetUnsecuredSmeLoansRequest {
    /**
     * Used for conditional request, to retrieve data only if modified since a given date
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;

    public GetUnsecuredSmeLoansRequest withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    
    /**
     * Used for conditional request, to retrieve data only if the given Etag value does not match
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;

    public GetUnsecuredSmeLoansRequest withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
    
    public GetUnsecuredSmeLoansRequest(){}
}

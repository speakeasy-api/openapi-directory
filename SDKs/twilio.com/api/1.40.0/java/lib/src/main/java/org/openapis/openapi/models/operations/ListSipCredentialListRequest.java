/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListSipCredentialListRequest {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListSipCredentialListRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The page index. This value is simply for client state.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Page")
    public Long page;
    public ListSipCredentialListRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipCredentialListRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * The page token. This is provided by the API.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListSipCredentialListRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
}

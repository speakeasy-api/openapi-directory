/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListChannelRequest {
    /**
     * The page index. This value is simply for client state.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Page")
    public Long page;
    public ListChannelRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListChannelRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * The page token. This is provided by the API.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListChannelRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListChannelRequest withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Type")
    public org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum[] type;
    public ListChannelRequest withType(org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum[] type) {
        this.type = type;
        return this;
    }
    
}

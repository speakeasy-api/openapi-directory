/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetApiV2BroadcastservicesRequest {
    /**
     * The sort order of the list of broadcast services, based on broadcast service ID. If unspecified, the broadcast services are returned in random order. If using paging to iterate through the results, sort order should be specified.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderById")
    public GetApiV2BroadcastservicesOrderByIDEnum orderById;

    public GetApiV2BroadcastservicesRequest withOrderById(GetApiV2BroadcastservicesOrderByIDEnum orderById) {
        this.orderById = orderById;
        return this;
    }
    
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;

    public GetApiV2BroadcastservicesRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * The start page of the results to return. The first item is indexed at 0.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageStart")
    public Integer pageStart;

    public GetApiV2BroadcastservicesRequest withPageStart(Integer pageStart) {
        this.pageStart = pageStart;
        return this;
    }
    
    public GetApiV2BroadcastservicesRequest(){}
}

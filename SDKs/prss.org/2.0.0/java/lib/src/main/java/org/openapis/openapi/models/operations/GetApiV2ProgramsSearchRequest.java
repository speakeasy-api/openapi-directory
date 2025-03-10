/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetApiV2ProgramsSearchRequest {
    /**
     * Free text search that matches against the program title or description.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keywords")
    public String keywords;

    public GetApiV2ProgramsSearchRequest withKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }
    
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;

    public GetApiV2ProgramsSearchRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * The start page of the results to return. The first item is indexed at 0.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageStart")
    public Integer pageStart;

    public GetApiV2ProgramsSearchRequest withPageStart(Integer pageStart) {
        this.pageStart = pageStart;
        return this;
    }
    
    public GetApiV2ProgramsSearchRequest(){}
}

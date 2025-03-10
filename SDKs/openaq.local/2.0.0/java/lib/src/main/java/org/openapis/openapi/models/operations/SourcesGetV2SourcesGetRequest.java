/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SourcesGetV2SourcesGetRequest {
    /**
     * Change the number of results returned.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;

    public SourcesGetV2SourcesGetRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;

    public SourcesGetV2SourcesGetRequest withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    
    /**
     * An enumeration.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public SourcesGetV2SourcesGetOrderBySourcesOrderEnum orderBy;

    public SourcesGetV2SourcesGetRequest withOrderBy(SourcesGetV2SourcesGetOrderBySourcesOrderEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    
    /**
     * Paginate through results.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public SourcesGetV2SourcesGetRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Define sort order.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SourcesGetV2SourcesGetSortSortEnum sort;

    public SourcesGetV2SourcesGetRequest withSort(SourcesGetV2SourcesGetSortSortEnum sort) {
        this.sort = sort;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceId")
    public Long[] sourceId;

    public SourcesGetV2SourcesGetRequest withSourceId(Long[] sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceName")
    public String[] sourceName;

    public SourcesGetV2SourcesGetRequest withSourceName(String[] sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceSlug")
    public String[] sourceSlug;

    public SourcesGetV2SourcesGetRequest withSourceSlug(String[] sourceSlug) {
        this.sourceSlug = sourceSlug;
        return this;
    }
    
    public SourcesGetV2SourcesGetRequest(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ListSourceServiceOfferingsRequest {
    /**
     * Filter for querying collections.
     */
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public java.util.Map<String, Object> filter;

    public ListSourceServiceOfferingsRequest withFilter(java.util.Map<String, Object> filter) {
        this.filter = filter;
        return this;
    }
    
    /**
     * ID of the resource
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public ListSourceServiceOfferingsRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The numbers of items to return per page.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;

    public ListSourceServiceOfferingsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    /**
     * The number of items to skip before starting to collect the result set.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;

    public ListSourceServiceOfferingsRequest withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    
    /**
     * The list of attribute and order to sort the result set by.
     */
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;

    public ListSourceServiceOfferingsRequest withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    
    public ListSourceServiceOfferingsRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}

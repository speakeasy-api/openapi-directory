/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetUpdatedEditorialImagesRequest {
    /**
     * Show only editorial content that is available for distribution in a certain country
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;

    public GetUpdatedEditorialImagesRequest withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;

    public GetUpdatedEditorialImagesRequest withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    
    /**
     * Show images that were taken before the specified date
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_taken_end")
    public LocalDate dateTakenEnd;

    public GetUpdatedEditorialImagesRequest withDateTakenEnd(LocalDate dateTakenEnd) {
        this.dateTakenEnd = dateTakenEnd;
        return this;
    }
    
    /**
     * Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_taken_start")
    public LocalDate dateTakenStart;

    public GetUpdatedEditorialImagesRequest withDateTakenStart(LocalDate dateTakenStart) {
        this.dateTakenStart = dateTakenStart;
        return this;
    }
    
    /**
     * Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_updated_end")
    public OffsetDateTime dateUpdatedEnd;

    public GetUpdatedEditorialImagesRequest withDateUpdatedEnd(OffsetDateTime dateUpdatedEnd) {
        this.dateUpdatedEnd = dateUpdatedEnd;
        return this;
    }
    
    /**
     * Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_updated_start")
    public OffsetDateTime dateUpdatedStart;

    public GetUpdatedEditorialImagesRequest withDateUpdatedStart(OffsetDateTime dateUpdatedStart) {
        this.dateUpdatedStart = dateUpdatedStart;
        return this;
    }
    
    /**
     * Number of results per page
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public GetUpdatedEditorialImagesRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * Sort by
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUpdatedEditorialImagesSortEnum sort;

    public GetUpdatedEditorialImagesRequest withSort(GetUpdatedEditorialImagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    
    /**
     * Show only editorial content from certain suppliers
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supplier_code")
    public String[] supplierCode;

    public GetUpdatedEditorialImagesRequest withSupplierCode(String[] supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
    
    /**
     * Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetUpdatedEditorialImagesTypeEnum type;

    public GetUpdatedEditorialImagesRequest withType(GetUpdatedEditorialImagesTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public GetUpdatedEditorialImagesRequest(@JsonProperty("country") String country, @JsonProperty("date_updated_end") OffsetDateTime dateUpdatedEnd, @JsonProperty("date_updated_start") OffsetDateTime dateUpdatedStart, @JsonProperty("type") GetUpdatedEditorialImagesTypeEnum type) {
        this.country = country;
        this.dateUpdatedEnd = dateUpdatedEnd;
        this.dateUpdatedStart = dateUpdatedStart;
        this.type = type;
  }
}

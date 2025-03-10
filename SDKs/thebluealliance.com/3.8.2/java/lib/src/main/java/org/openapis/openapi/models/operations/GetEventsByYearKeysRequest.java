/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetEventsByYearKeysRequest {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;

    public GetEventsByYearKeysRequest withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
    
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;

    public GetEventsByYearKeysRequest withYear(Long year) {
        this.year = year;
        return this;
    }
    
    public GetEventsByYearKeysRequest(@JsonProperty("year") Long year) {
        this.year = year;
  }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Season {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;

    public Season withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public String endDate;

    public Season withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SeasonID")
    public Long seasonID;

    public Season withSeasonID(Long seasonID) {
        this.seasonID = seasonID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;

    public Season withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    
    public Season(){}
}

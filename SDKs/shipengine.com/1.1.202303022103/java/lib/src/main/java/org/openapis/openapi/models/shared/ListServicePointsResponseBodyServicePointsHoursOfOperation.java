/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListServicePointsResponseBodyServicePointsHoursOfOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friday")
    public ListServicePointsResponseBodyServicePointsHoursOfOperationFriday[] friday;
    public ListServicePointsResponseBodyServicePointsHoursOfOperation withFriday(ListServicePointsResponseBodyServicePointsHoursOfOperationFriday[] friday) {
        this.friday = friday;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monday")
    public ListServicePointsResponseBodyServicePointsHoursOfOperationMonday[] monday;
    public ListServicePointsResponseBodyServicePointsHoursOfOperation withMonday(ListServicePointsResponseBodyServicePointsHoursOfOperationMonday[] monday) {
        this.monday = monday;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturday")
    public ListServicePointsResponseBodyServicePointsHoursOfOperationSaturday[] saturday;
    public ListServicePointsResponseBodyServicePointsHoursOfOperation withSaturday(ListServicePointsResponseBodyServicePointsHoursOfOperationSaturday[] saturday) {
        this.saturday = saturday;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday")
    public ListServicePointsResponseBodyServicePointsHoursOfOperationSunday[] sunday;
    public ListServicePointsResponseBodyServicePointsHoursOfOperation withSunday(ListServicePointsResponseBodyServicePointsHoursOfOperationSunday[] sunday) {
        this.sunday = sunday;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thursday")
    public ListServicePointsResponseBodyServicePointsHoursOfOperationThursday[] thursday;
    public ListServicePointsResponseBodyServicePointsHoursOfOperation withThursday(ListServicePointsResponseBodyServicePointsHoursOfOperationThursday[] thursday) {
        this.thursday = thursday;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tuesday")
    public ListServicePointsResponseBodyServicePointsHoursOfOperationTuesday[] tuesday;
    public ListServicePointsResponseBodyServicePointsHoursOfOperation withTuesday(ListServicePointsResponseBodyServicePointsHoursOfOperationTuesday[] tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wednesday")
    public ListServicePointsResponseBodyServicePointsHoursOfOperationWednesday[] wednesday;
    public ListServicePointsResponseBodyServicePointsHoursOfOperation withWednesday(ListServicePointsResponseBodyServicePointsHoursOfOperationWednesday[] wednesday) {
        this.wednesday = wednesday;
        return this;
    }
    
}

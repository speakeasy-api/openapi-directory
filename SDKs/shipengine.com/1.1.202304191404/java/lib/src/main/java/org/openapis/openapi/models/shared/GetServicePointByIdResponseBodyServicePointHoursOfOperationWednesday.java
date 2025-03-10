/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServicePointByIdResponseBodyServicePointHoursOfOperationWednesday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close")
    public String close;

    public GetServicePointByIdResponseBodyServicePointHoursOfOperationWednesday withClose(String close) {
        this.close = close;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open")
    public String open;

    public GetServicePointByIdResponseBodyServicePointHoursOfOperationWednesday withOpen(String open) {
        this.open = open;
        return this;
    }
    
    public GetServicePointByIdResponseBodyServicePointHoursOfOperationWednesday(){}
}

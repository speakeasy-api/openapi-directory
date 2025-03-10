/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServicePointByIdResponseBody - A get service point by ID response body
 */
public class GetServicePointByIdResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_point")
    public GetServicePointByIdResponseBodyServicePoint servicePoint;

    public GetServicePointByIdResponseBody withServicePoint(GetServicePointByIdResponseBodyServicePoint servicePoint) {
        this.servicePoint = servicePoint;
        return this;
    }
    
    public GetServicePointByIdResponseBody(){}
}

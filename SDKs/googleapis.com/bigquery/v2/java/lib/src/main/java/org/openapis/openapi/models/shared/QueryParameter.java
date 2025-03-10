/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class QueryParameter {
    /**
     * [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public QueryParameter withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterType")
    public QueryParameterType parameterType;

    public QueryParameter withParameterType(QueryParameterType parameterType) {
        this.parameterType = parameterType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterValue")
    public QueryParameterValue parameterValue;

    public QueryParameter withParameterValue(QueryParameterValue parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    }
    
    public QueryParameter(){}
}

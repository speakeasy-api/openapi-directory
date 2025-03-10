/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UrlMapTestHeader - HTTP headers used in UrlMapTests.
 */
public class UrlMapTestHeader {
    /**
     * Header name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public UrlMapTestHeader withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Header value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public UrlMapTestHeader withValue(String value) {
        this.value = value;
        return this;
    }
    
    public UrlMapTestHeader(){}
}

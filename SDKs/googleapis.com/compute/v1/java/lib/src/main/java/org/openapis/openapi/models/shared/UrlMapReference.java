/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UrlMapReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlMap")
    public String urlMap;

    public UrlMapReference withUrlMap(String urlMap) {
        this.urlMap = urlMap;
        return this;
    }
    
    public UrlMapReference(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Language {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;

    public Language withCode(String code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Language withName(String name) {
        this.name = name;
        return this;
    }
    
    public Language(){}
}

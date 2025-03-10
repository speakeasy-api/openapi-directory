/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Domain - OK
 */
public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;

    public Domain withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportable")
    public Boolean exportable;

    public Domain withExportable(Boolean exportable) {
        this.exportable = exportable;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Domain withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Domain withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DomainTypeEnum type;

    public Domain withType(DomainTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public Domain(){}
}

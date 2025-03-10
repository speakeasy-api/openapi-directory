/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnterpriseCrmEventbusProtoEventBusProperties - LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus.
 */
public class EnterpriseCrmEventbusProtoEventBusProperties {
    /**
     * An unordered list of property entries.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public EnterpriseCrmEventbusProtoPropertyEntry[] properties;

    public EnterpriseCrmEventbusProtoEventBusProperties withProperties(EnterpriseCrmEventbusProtoPropertyEntry[] properties) {
        this.properties = properties;
        return this;
    }
    
    public EnterpriseCrmEventbusProtoEventBusProperties(){}
}

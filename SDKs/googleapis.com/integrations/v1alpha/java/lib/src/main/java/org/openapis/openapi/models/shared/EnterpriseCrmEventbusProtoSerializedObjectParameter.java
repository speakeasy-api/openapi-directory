/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseCrmEventbusProtoSerializedObjectParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectValue")
    public String objectValue;

    public EnterpriseCrmEventbusProtoSerializedObjectParameter withObjectValue(String objectValue) {
        this.objectValue = objectValue;
        return this;
    }
    
    public EnterpriseCrmEventbusProtoSerializedObjectParameter(){}
}

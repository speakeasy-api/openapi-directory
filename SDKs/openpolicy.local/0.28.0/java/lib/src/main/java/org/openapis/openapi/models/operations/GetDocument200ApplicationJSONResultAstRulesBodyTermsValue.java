/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDocument200ApplicationJSONResultAstRulesBodyTermsValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public GetDocument200ApplicationJSONResultAstRulesBodyTermsValue withType(String type) {
        this.type = type;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public GetDocument200ApplicationJSONResultAstRulesBodyTermsValue withValue(String value) {
        this.value = value;
        return this;
    }
    
    public GetDocument200ApplicationJSONResultAstRulesBodyTermsValue(){}
}

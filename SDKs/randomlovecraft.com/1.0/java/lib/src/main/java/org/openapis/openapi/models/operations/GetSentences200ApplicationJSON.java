/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSentences200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public org.openapis.openapi.models.shared.Sentence[] data;

    public GetSentences200ApplicationJSON withData(org.openapis.openapi.models.shared.Sentence[] data) {
        this.data = data;
        return this;
    }
    
    public GetSentences200ApplicationJSON(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FindScriptByIdRequest {
    /**
     * The script id
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptId")
    public String scriptId;

    public FindScriptByIdRequest withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
    
    public FindScriptByIdRequest(@JsonProperty("scriptId") String scriptId) {
        this.scriptId = scriptId;
  }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AssignCMRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.Cm cm;

    public AssignCMRequest withCm(org.openapis.openapi.models.shared.Cm cm) {
        this.cm = cm;
        return this;
    }
    
    /**
     * Project ID
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;

    public AssignCMRequest withId(Long id) {
        this.id = id;
        return this;
    }
    
    public AssignCMRequest(@JsonProperty("id") Long id) {
        this.id = id;
  }
}

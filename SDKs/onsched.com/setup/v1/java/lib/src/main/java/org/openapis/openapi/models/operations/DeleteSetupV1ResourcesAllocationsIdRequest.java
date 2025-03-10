/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteSetupV1ResourcesAllocationsIdRequest {
    /**
     * id of resourceAllocation object
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public DeleteSetupV1ResourcesAllocationsIdRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    public DeleteSetupV1ResourcesAllocationsIdRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}

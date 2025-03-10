/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteVolumesIdRequest {
    /**
     * ID of the Volume
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public DeleteVolumesIdRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    public DeleteVolumesIdRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}

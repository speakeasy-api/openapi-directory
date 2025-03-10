/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetFloatingIpsIdRequest {
    /**
     * ID of the Floating IP
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;

    public GetFloatingIpsIdRequest withId(Long id) {
        this.id = id;
        return this;
    }
    
    public GetFloatingIpsIdRequest(@JsonProperty("id") Long id) {
        this.id = id;
  }
}

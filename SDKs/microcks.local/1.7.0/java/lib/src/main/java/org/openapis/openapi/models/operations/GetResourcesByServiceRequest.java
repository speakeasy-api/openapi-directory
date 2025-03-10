/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetResourcesByServiceRequest {
    /**
     * Unique identifier of the Service or API the resources are attached to
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;

    public GetResourcesByServiceRequest withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    
    public GetResourcesByServiceRequest(@JsonProperty("serviceId") String serviceId) {
        this.serviceId = serviceId;
  }
}

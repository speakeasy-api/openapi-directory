/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetDeviceRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;

    public GetDeviceRequest withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    
    public GetDeviceRequest(@JsonProperty("serial") String serial) {
        this.serial = serial;
  }
}

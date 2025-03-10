/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchPortRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceSwitchPortRequestBody requestBody;

    public UpdateDeviceSwitchPortRequest withRequestBody(UpdateDeviceSwitchPortRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portId")
    public String portId;

    public UpdateDeviceSwitchPortRequest withPortId(String portId) {
        this.portId = portId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;

    public UpdateDeviceSwitchPortRequest withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    
    public UpdateDeviceSwitchPortRequest(@JsonProperty("portId") String portId, @JsonProperty("serial") String serial) {
        this.portId = portId;
        this.serial = serial;
  }
}

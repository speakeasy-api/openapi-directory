/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CycleDeviceSwitchPortsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CycleDeviceSwitchPortsRequestBody requestBody;

    public CycleDeviceSwitchPortsRequest withRequestBody(CycleDeviceSwitchPortsRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;

    public CycleDeviceSwitchPortsRequest withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    
    public CycleDeviceSwitchPortsRequest(@JsonProperty("RequestBody") CycleDeviceSwitchPortsRequestBody requestBody, @JsonProperty("serial") String serial) {
        this.requestBody = requestBody;
        this.serial = serial;
  }
}

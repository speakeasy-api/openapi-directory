/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchDeployedDevicesCertificateRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FleetSid")
    public String fleetSid;

    public FetchDeployedDevicesCertificateRequest withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
    
    /**
     * Provides a 34 character string that uniquely identifies the requested Certificate credential resource.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;

    public FetchDeployedDevicesCertificateRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
    public FetchDeployedDevicesCertificateRequest(@JsonProperty("FleetSid") String fleetSid, @JsonProperty("Sid") String sid) {
        this.fleetSid = fleetSid;
        this.sid = sid;
  }
}

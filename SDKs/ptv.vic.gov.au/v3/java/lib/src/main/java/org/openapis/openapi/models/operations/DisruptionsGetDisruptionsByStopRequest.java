/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionsByStopRequest {
    /**
     * Your developer id
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;

    public DisruptionsGetDisruptionsByStopRequest withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    
    /**
     * Filter by status of disruption
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disruption_status")
    public DisruptionsGetDisruptionsByStopDisruptionStatusEnum disruptionStatus;

    public DisruptionsGetDisruptionsByStopRequest withDisruptionStatus(DisruptionsGetDisruptionsByStopDisruptionStatusEnum disruptionStatus) {
        this.disruptionStatus = disruptionStatus;
        return this;
    }
    
    /**
     * Authentication signature for request
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;

    public DisruptionsGetDisruptionsByStopRequest withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    
    /**
     * Identifier of stop; values returned by Stops API - v3/stops
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop_id")
    public Integer stopId;

    public DisruptionsGetDisruptionsByStopRequest withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
    
    /**
     * Please ignore
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;

    public DisruptionsGetDisruptionsByStopRequest withToken(String token) {
        this.token = token;
        return this;
    }
    
    public DisruptionsGetDisruptionsByStopRequest(@JsonProperty("stop_id") Integer stopId) {
        this.stopId = stopId;
  }
}

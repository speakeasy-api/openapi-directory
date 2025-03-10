/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClusterTelemetry - Telemetry integration for the cluster.
 */
public class ClusterTelemetry {
    /**
     * Type of the integration.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ClusterTelemetryTypeEnum type;

    public ClusterTelemetry withType(ClusterTelemetryTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public ClusterTelemetry(){}
}

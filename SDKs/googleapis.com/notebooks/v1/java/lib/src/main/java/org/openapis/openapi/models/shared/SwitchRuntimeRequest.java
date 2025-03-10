/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SwitchRuntimeRequest - Request for switching a Managed Notebook Runtime.
 */
public class SwitchRuntimeRequest {
    /**
     * Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorConfig")
    public RuntimeAcceleratorConfig acceleratorConfig;

    public SwitchRuntimeRequest withAcceleratorConfig(RuntimeAcceleratorConfig acceleratorConfig) {
        this.acceleratorConfig = acceleratorConfig;
        return this;
    }
    
    /**
     * machine type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;

    public SwitchRuntimeRequest withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    
    /**
     * Idempotent request UUID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;

    public SwitchRuntimeRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    
    public SwitchRuntimeRequest(){}
}

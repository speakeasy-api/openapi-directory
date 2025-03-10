/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class InstanceGroupManagerAutoHealingPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoHealingTriggers")
    public InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers autoHealingTriggers;

    public InstanceGroupManagerAutoHealingPolicy withAutoHealingTriggers(InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers autoHealingTriggers) {
        this.autoHealingTriggers = autoHealingTriggers;
        return this;
    }
    
    /**
     * The URL for the health check that signals autohealing.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheck")
    public String healthCheck;

    public InstanceGroupManagerAutoHealingPolicy withHealthCheck(String healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    
    /**
     * The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. This initial delay allows instances to initialize and run their startup scripts before the instance group determines that they are UNHEALTHY. This prevents the managed instance group from recreating its instances prematurely. This value must be from range [0, 3600].
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialDelaySec")
    public Integer initialDelaySec;

    public InstanceGroupManagerAutoHealingPolicy withInitialDelaySec(Integer initialDelaySec) {
        this.initialDelaySec = initialDelaySec;
        return this;
    }
    
    /**
     * Encapsulates numeric value that can be either absolute or relative.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUnavailable")
    public FixedOrPercent maxUnavailable;

    public InstanceGroupManagerAutoHealingPolicy withMaxUnavailable(FixedOrPercent maxUnavailable) {
        this.maxUnavailable = maxUnavailable;
        return this;
    }
    
    public InstanceGroupManagerAutoHealingPolicy(){}
}

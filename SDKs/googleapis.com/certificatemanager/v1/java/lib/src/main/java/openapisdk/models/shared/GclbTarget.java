package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GclbTarget
 * Describes a Target Proxy that uses this Certificate Map.
**/
public class GclbTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipConfigs")
    public IpConfig[] ipConfigs;
    public GclbTarget withIpConfigs(IpConfig[] ipConfigs) {
        this.ipConfigs = ipConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetHttpsProxy")
    public String targetHttpsProxy;
    public GclbTarget withTargetHttpsProxy(String targetHttpsProxy) {
        this.targetHttpsProxy = targetHttpsProxy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSslProxy")
    public String targetSslProxy;
    public GclbTarget withTargetSslProxy(String targetSslProxy) {
        this.targetSslProxy = targetSslProxy;
        return this;
    }
}
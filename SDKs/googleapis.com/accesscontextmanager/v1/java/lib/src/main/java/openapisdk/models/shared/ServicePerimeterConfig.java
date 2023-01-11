package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServicePerimeterConfig
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
public class ServicePerimeterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevels")
    public String[] accessLevels;
    public ServicePerimeterConfig withAccessLevels(String[] accessLevels) {
        this.accessLevels = accessLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressPolicies")
    public EgressPolicy[] egressPolicies;
    public ServicePerimeterConfig withEgressPolicies(EgressPolicy[] egressPolicies) {
        this.egressPolicies = egressPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressPolicies")
    public IngressPolicy[] ingressPolicies;
    public ServicePerimeterConfig withIngressPolicies(IngressPolicy[] ingressPolicies) {
        this.ingressPolicies = ingressPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public ServicePerimeterConfig withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedServices")
    public String[] restrictedServices;
    public ServicePerimeterConfig withRestrictedServices(String[] restrictedServices) {
        this.restrictedServices = restrictedServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcAccessibleServices")
    public VpcAccessibleServices vpcAccessibleServices;
    public ServicePerimeterConfig withVpcAccessibleServices(VpcAccessibleServices vpcAccessibleServices) {
        this.vpcAccessibleServices = vpcAccessibleServices;
        return this;
    }
}
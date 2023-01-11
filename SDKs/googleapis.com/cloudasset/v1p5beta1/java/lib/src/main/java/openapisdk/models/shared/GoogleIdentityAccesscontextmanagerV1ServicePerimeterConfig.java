package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
**/
public class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessLevels")
    public String[] accessLevels;
    public GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig withAccessLevels(String[] accessLevels) {
        this.accessLevels = accessLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressPolicies")
    public GoogleIdentityAccesscontextmanagerV1EgressPolicy[] egressPolicies;
    public GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig withEgressPolicies(GoogleIdentityAccesscontextmanagerV1EgressPolicy[] egressPolicies) {
        this.egressPolicies = egressPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingressPolicies")
    public GoogleIdentityAccesscontextmanagerV1IngressPolicy[] ingressPolicies;
    public GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig withIngressPolicies(GoogleIdentityAccesscontextmanagerV1IngressPolicy[] ingressPolicies) {
        this.ingressPolicies = ingressPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedServices")
    public String[] restrictedServices;
    public GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig withRestrictedServices(String[] restrictedServices) {
        this.restrictedServices = restrictedServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcAccessibleServices")
    public GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices vpcAccessibleServices;
    public GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig withVpcAccessibleServices(GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices vpcAccessibleServices) {
        this.vpcAccessibleServices = vpcAccessibleServices;
        return this;
    }
}
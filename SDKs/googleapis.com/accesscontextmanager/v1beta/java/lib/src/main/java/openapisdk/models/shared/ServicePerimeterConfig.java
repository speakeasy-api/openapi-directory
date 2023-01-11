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
    @JsonProperty("unrestrictedServices")
    public String[] unrestrictedServices;
    public ServicePerimeterConfig withUnrestrictedServices(String[] unrestrictedServices) {
        this.unrestrictedServices = unrestrictedServices;
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
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1Condition
 * A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
**/
public class GoogleIdentityAccesscontextmanagerV1Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePolicy")
    public GoogleIdentityAccesscontextmanagerV1DevicePolicy devicePolicy;
    public GoogleIdentityAccesscontextmanagerV1Condition withDevicePolicy(GoogleIdentityAccesscontextmanagerV1DevicePolicy devicePolicy) {
        this.devicePolicy = devicePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipSubnetworks")
    public String[] ipSubnetworks;
    public GoogleIdentityAccesscontextmanagerV1Condition withIpSubnetworks(String[] ipSubnetworks) {
        this.ipSubnetworks = ipSubnetworks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String[] members;
    public GoogleIdentityAccesscontextmanagerV1Condition withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negate")
    public Boolean negate;
    public GoogleIdentityAccesscontextmanagerV1Condition withNegate(Boolean negate) {
        this.negate = negate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public String[] regions;
    public GoogleIdentityAccesscontextmanagerV1Condition withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredAccessLevels")
    public String[] requiredAccessLevels;
    public GoogleIdentityAccesscontextmanagerV1Condition withRequiredAccessLevels(String[] requiredAccessLevels) {
        this.requiredAccessLevels = requiredAccessLevels;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartnerClaim
 * Identifies one claim request.
**/
public class PartnerClaim {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public PartnerClaim withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceIdentifier")
    public DeviceIdentifier deviceIdentifier;
    public PartnerClaim withDeviceIdentifier(DeviceIdentifier deviceIdentifier) {
        this.deviceIdentifier = deviceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMetadata")
    public DeviceMetadata deviceMetadata;
    public PartnerClaim withDeviceMetadata(DeviceMetadata deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleWorkspaceCustomerId")
    public String googleWorkspaceCustomerId;
    public PartnerClaim withGoogleWorkspaceCustomerId(String googleWorkspaceCustomerId) {
        this.googleWorkspaceCustomerId = googleWorkspaceCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preProvisioningToken")
    public String preProvisioningToken;
    public PartnerClaim withPreProvisioningToken(String preProvisioningToken) {
        this.preProvisioningToken = preProvisioningToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionType")
    public PartnerClaimSectionTypeEnum sectionType;
    public PartnerClaim withSectionType(PartnerClaimSectionTypeEnum sectionType) {
        this.sectionType = sectionType;
        return this;
    }
}
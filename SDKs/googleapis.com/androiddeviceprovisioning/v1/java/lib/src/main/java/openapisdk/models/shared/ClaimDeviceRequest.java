package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClaimDeviceRequest
 * Request message to claim a device on behalf of a customer.
**/
public class ClaimDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public ClaimDeviceRequest withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceIdentifier")
    public DeviceIdentifier deviceIdentifier;
    public ClaimDeviceRequest withDeviceIdentifier(DeviceIdentifier deviceIdentifier) {
        this.deviceIdentifier = deviceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMetadata")
    public DeviceMetadata deviceMetadata;
    public ClaimDeviceRequest withDeviceMetadata(DeviceMetadata deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleWorkspaceCustomerId")
    public String googleWorkspaceCustomerId;
    public ClaimDeviceRequest withGoogleWorkspaceCustomerId(String googleWorkspaceCustomerId) {
        this.googleWorkspaceCustomerId = googleWorkspaceCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preProvisioningToken")
    public String preProvisioningToken;
    public ClaimDeviceRequest withPreProvisioningToken(String preProvisioningToken) {
        this.preProvisioningToken = preProvisioningToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionType")
    public ClaimDeviceRequestSectionTypeEnum sectionType;
    public ClaimDeviceRequest withSectionType(ClaimDeviceRequestSectionTypeEnum sectionType) {
        this.sectionType = sectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simlockProfileId")
    public String simlockProfileId;
    public ClaimDeviceRequest withSimlockProfileId(String simlockProfileId) {
        this.simlockProfileId = simlockProfileId;
        return this;
    }
}
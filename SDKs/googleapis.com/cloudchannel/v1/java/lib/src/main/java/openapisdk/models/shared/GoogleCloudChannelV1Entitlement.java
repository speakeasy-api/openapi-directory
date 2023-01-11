package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Entitlement
 * An entitlement is a representation of a customer's ability to use a service.
**/
public class GoogleCloudChannelV1Entitlement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associationInfo")
    public GoogleCloudChannelV1AssociationInfo associationInfo;
    public GoogleCloudChannelV1Entitlement withAssociationInfo(GoogleCloudChannelV1AssociationInfo associationInfo) {
        this.associationInfo = associationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentSettings")
    public GoogleCloudChannelV1CommitmentSettings commitmentSettings;
    public GoogleCloudChannelV1Entitlement withCommitmentSettings(GoogleCloudChannelV1CommitmentSettings commitmentSettings) {
        this.commitmentSettings = commitmentSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudChannelV1Entitlement withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1Entitlement withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offer")
    public String offer;
    public GoogleCloudChannelV1Entitlement withOffer(String offer) {
        this.offer = offer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public GoogleCloudChannelV1Parameter[] parameters;
    public GoogleCloudChannelV1Entitlement withParameters(GoogleCloudChannelV1Parameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedService")
    public GoogleCloudChannelV1ProvisionedService provisionedService;
    public GoogleCloudChannelV1Entitlement withProvisionedService(GoogleCloudChannelV1ProvisionedService provisionedService) {
        this.provisionedService = provisionedService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningState")
    public GoogleCloudChannelV1EntitlementProvisioningStateEnum provisioningState;
    public GoogleCloudChannelV1Entitlement withProvisioningState(GoogleCloudChannelV1EntitlementProvisioningStateEnum provisioningState) {
        this.provisioningState = provisioningState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderId")
    public String purchaseOrderId;
    public GoogleCloudChannelV1Entitlement withPurchaseOrderId(String purchaseOrderId) {
        this.purchaseOrderId = purchaseOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReasons")
    public GoogleCloudChannelV1EntitlementSuspensionReasonsEnum[] suspensionReasons;
    public GoogleCloudChannelV1Entitlement withSuspensionReasons(GoogleCloudChannelV1EntitlementSuspensionReasonsEnum[] suspensionReasons) {
        this.suspensionReasons = suspensionReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialSettings")
    public GoogleCloudChannelV1TrialSettings trialSettings;
    public GoogleCloudChannelV1Entitlement withTrialSettings(GoogleCloudChannelV1TrialSettings trialSettings) {
        this.trialSettings = trialSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudChannelV1Entitlement withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1EntitlementInput
 * An entitlement is a representation of a customer's ability to use a service.
**/
public class GoogleCloudChannelV1EntitlementInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associationInfo")
    public GoogleCloudChannelV1AssociationInfo associationInfo;
    public GoogleCloudChannelV1EntitlementInput withAssociationInfo(GoogleCloudChannelV1AssociationInfo associationInfo) {
        this.associationInfo = associationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentSettings")
    public GoogleCloudChannelV1CommitmentSettingsInput commitmentSettings;
    public GoogleCloudChannelV1EntitlementInput withCommitmentSettings(GoogleCloudChannelV1CommitmentSettingsInput commitmentSettings) {
        this.commitmentSettings = commitmentSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offer")
    public String offer;
    public GoogleCloudChannelV1EntitlementInput withOffer(String offer) {
        this.offer = offer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public GoogleCloudChannelV1ParameterInput[] parameters;
    public GoogleCloudChannelV1EntitlementInput withParameters(GoogleCloudChannelV1ParameterInput[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderId")
    public String purchaseOrderId;
    public GoogleCloudChannelV1EntitlementInput withPurchaseOrderId(String purchaseOrderId) {
        this.purchaseOrderId = purchaseOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialSettings")
    public GoogleCloudChannelV1TrialSettings trialSettings;
    public GoogleCloudChannelV1EntitlementInput withTrialSettings(GoogleCloudChannelV1TrialSettings trialSettings) {
        this.trialSettings = trialSettings;
        return this;
    }
}
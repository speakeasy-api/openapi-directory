package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrunkUpdateTrunkRequest {
    @SpeakeasyMetadata("form:name=CnamLookupEnabled")
    public Boolean cnamLookupEnabled;
    public UpdateTrunkUpdateTrunkRequest withCnamLookupEnabled(Boolean cnamLookupEnabled) {
        this.cnamLookupEnabled = cnamLookupEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DisasterRecoveryMethod")
    public UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum disasterRecoveryMethod;
    public UpdateTrunkUpdateTrunkRequest withDisasterRecoveryMethod(UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum disasterRecoveryMethod) {
        this.disasterRecoveryMethod = disasterRecoveryMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=DisasterRecoveryUrl")
    public String disasterRecoveryUrl;
    public UpdateTrunkUpdateTrunkRequest withDisasterRecoveryUrl(String disasterRecoveryUrl) {
        this.disasterRecoveryUrl = disasterRecoveryUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=DomainName")
    public String domainName;
    public UpdateTrunkUpdateTrunkRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateTrunkUpdateTrunkRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Secure")
    public Boolean secure;
    public UpdateTrunkUpdateTrunkRequest withSecure(Boolean secure) {
        this.secure = secure;
        return this;
    }
    @SpeakeasyMetadata("form:name=TransferCallerId")
    public openapisdk.models.shared.TrunkEnumTransferCallerIdEnum transferCallerId;
    public UpdateTrunkUpdateTrunkRequest withTransferCallerId(openapisdk.models.shared.TrunkEnumTransferCallerIdEnum transferCallerId) {
        this.transferCallerId = transferCallerId;
        return this;
    }
    @SpeakeasyMetadata("form:name=TransferMode")
    public openapisdk.models.shared.TrunkEnumTransferSettingEnum transferMode;
    public UpdateTrunkUpdateTrunkRequest withTransferMode(openapisdk.models.shared.TrunkEnumTransferSettingEnum transferMode) {
        this.transferMode = transferMode;
        return this;
    }
}
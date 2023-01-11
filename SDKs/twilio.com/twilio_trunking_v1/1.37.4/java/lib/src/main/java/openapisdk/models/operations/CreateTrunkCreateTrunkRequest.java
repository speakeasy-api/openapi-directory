package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrunkCreateTrunkRequest {
    @SpeakeasyMetadata("form:name=CnamLookupEnabled")
    public Boolean cnamLookupEnabled;
    public CreateTrunkCreateTrunkRequest withCnamLookupEnabled(Boolean cnamLookupEnabled) {
        this.cnamLookupEnabled = cnamLookupEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DisasterRecoveryMethod")
    public CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum disasterRecoveryMethod;
    public CreateTrunkCreateTrunkRequest withDisasterRecoveryMethod(CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum disasterRecoveryMethod) {
        this.disasterRecoveryMethod = disasterRecoveryMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=DisasterRecoveryUrl")
    public String disasterRecoveryUrl;
    public CreateTrunkCreateTrunkRequest withDisasterRecoveryUrl(String disasterRecoveryUrl) {
        this.disasterRecoveryUrl = disasterRecoveryUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=DomainName")
    public String domainName;
    public CreateTrunkCreateTrunkRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateTrunkCreateTrunkRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Secure")
    public Boolean secure;
    public CreateTrunkCreateTrunkRequest withSecure(Boolean secure) {
        this.secure = secure;
        return this;
    }
    @SpeakeasyMetadata("form:name=TransferCallerId")
    public openapisdk.models.shared.TrunkEnumTransferCallerIdEnum transferCallerId;
    public CreateTrunkCreateTrunkRequest withTransferCallerId(openapisdk.models.shared.TrunkEnumTransferCallerIdEnum transferCallerId) {
        this.transferCallerId = transferCallerId;
        return this;
    }
    @SpeakeasyMetadata("form:name=TransferMode")
    public openapisdk.models.shared.TrunkEnumTransferSettingEnum transferMode;
    public CreateTrunkCreateTrunkRequest withTransferMode(openapisdk.models.shared.TrunkEnumTransferSettingEnum transferMode) {
        this.transferMode = transferMode;
        return this;
    }
}
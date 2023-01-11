package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBundleCreateBundleRequest {
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public CreateBundleCreateBundleRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndUserType")
    public openapisdk.models.shared.BundleEnumEndUserTypeEnum endUserType;
    public CreateBundleCreateBundleRequest withEndUserType(openapisdk.models.shared.BundleEnumEndUserTypeEnum endUserType) {
        this.endUserType = endUserType;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateBundleCreateBundleRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IsoCountry")
    public String isoCountry;
    public CreateBundleCreateBundleRequest withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @SpeakeasyMetadata("form:name=NumberType")
    public String numberType;
    public CreateBundleCreateBundleRequest withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @SpeakeasyMetadata("form:name=RegulationSid")
    public String regulationSid;
    public CreateBundleCreateBundleRequest withRegulationSid(String regulationSid) {
        this.regulationSid = regulationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateBundleCreateBundleRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBrandRegistrationsCreateBrandRegistrationsRequest {
    @SpeakeasyMetadata("form:name=A2PProfileBundleSid")
    public String a2PProfileBundleSid;
    public CreateBrandRegistrationsCreateBrandRegistrationsRequest withA2PProfileBundleSid(String a2PProfileBundleSid) {
        this.a2PProfileBundleSid = a2PProfileBundleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=BrandType")
    public String brandType;
    public CreateBrandRegistrationsCreateBrandRegistrationsRequest withBrandType(String brandType) {
        this.brandType = brandType;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomerProfileBundleSid")
    public String customerProfileBundleSid;
    public CreateBrandRegistrationsCreateBrandRegistrationsRequest withCustomerProfileBundleSid(String customerProfileBundleSid) {
        this.customerProfileBundleSid = customerProfileBundleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Mock")
    public Boolean mock;
    public CreateBrandRegistrationsCreateBrandRegistrationsRequest withMock(Boolean mock) {
        this.mock = mock;
        return this;
    }
    @SpeakeasyMetadata("form:name=SkipAutomaticSecVet")
    public Boolean skipAutomaticSecVet;
    public CreateBrandRegistrationsCreateBrandRegistrationsRequest withSkipAutomaticSecVet(Boolean skipAutomaticSecVet) {
        this.skipAutomaticSecVet = skipAutomaticSecVet;
        return this;
    }
}
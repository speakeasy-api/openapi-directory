package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUsAppToPersonUsecaseQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BrandRegistrationSid")
    public String brandRegistrationSid;
    public FetchUsAppToPersonUsecaseQueryParams withBrandRegistrationSid(String brandRegistrationSid) {
        this.brandRegistrationSid = brandRegistrationSid;
        return this;
    }
}
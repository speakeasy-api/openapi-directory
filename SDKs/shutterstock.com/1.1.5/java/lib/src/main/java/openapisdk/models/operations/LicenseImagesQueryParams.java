package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public LicenseImagesFormatEnum format;
    public LicenseImagesQueryParams withFormat(LicenseImagesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_id")
    public String searchId;
    public LicenseImagesQueryParams withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public LicenseImagesSizeEnum size;
    public LicenseImagesQueryParams withSize(LicenseImagesSizeEnum size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subscription_id")
    public String subscriptionId;
    public LicenseImagesQueryParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}
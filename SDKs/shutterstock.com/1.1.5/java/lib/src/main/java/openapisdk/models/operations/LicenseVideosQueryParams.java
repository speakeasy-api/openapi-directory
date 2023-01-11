package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_id")
    public String searchId;
    public LicenseVideosQueryParams withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public LicenseVideosSizeEnum size;
    public LicenseVideosQueryParams withSize(LicenseVideosSizeEnum size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subscription_id")
    public String subscriptionId;
    public LicenseVideosQueryParams withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
}
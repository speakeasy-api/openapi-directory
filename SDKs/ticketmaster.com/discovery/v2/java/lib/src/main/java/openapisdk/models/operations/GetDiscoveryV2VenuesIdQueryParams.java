package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2VenuesIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2VenuesIdIncludeLicensedContentEnum includeLicensedContent;
    public GetDiscoveryV2VenuesIdQueryParams withIncludeLicensedContent(GetDiscoveryV2VenuesIdIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetDiscoveryV2VenuesIdQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
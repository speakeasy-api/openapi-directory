package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2EventsIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2EventsIdIncludeLicensedContentEnum includeLicensedContent;
    public GetDiscoveryV2EventsIdQueryParams withIncludeLicensedContent(GetDiscoveryV2EventsIdIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetDiscoveryV2EventsIdQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
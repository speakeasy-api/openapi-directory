package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoveryV2ClassificationsIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum includeLicensedContent;
    public GetDiscoveryV2ClassificationsIdQueryParams withIncludeLicensedContent(GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetDiscoveryV2ClassificationsIdQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
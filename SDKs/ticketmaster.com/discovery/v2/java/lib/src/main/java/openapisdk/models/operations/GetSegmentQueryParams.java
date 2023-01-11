package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSegmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetSegmentIncludeLicensedContentEnum includeLicensedContent;
    public GetSegmentQueryParams withIncludeLicensedContent(GetSegmentIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetSegmentQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
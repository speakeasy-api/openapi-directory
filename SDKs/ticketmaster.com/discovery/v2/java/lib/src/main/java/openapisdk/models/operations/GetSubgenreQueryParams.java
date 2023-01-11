package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubgenreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetSubgenreIncludeLicensedContentEnum includeLicensedContent;
    public GetSubgenreQueryParams withIncludeLicensedContent(GetSubgenreIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetSubgenreQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
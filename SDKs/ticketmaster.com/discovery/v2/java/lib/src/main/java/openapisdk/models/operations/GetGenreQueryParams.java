package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetGenreIncludeLicensedContentEnum includeLicensedContent;
    public GetGenreQueryParams withIncludeLicensedContent(GetGenreIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetGenreQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
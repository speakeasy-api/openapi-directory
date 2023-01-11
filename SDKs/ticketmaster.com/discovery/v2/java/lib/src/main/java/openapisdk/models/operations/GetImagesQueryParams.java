package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetImagesIncludeLicensedContentEnum includeLicensedContent;
    public GetImagesQueryParams withIncludeLicensedContent(GetImagesIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetImagesQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
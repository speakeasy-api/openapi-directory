package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV2CvSimilarVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_id")
    public String assetId;
    public GetV2CvSimilarVideosQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public GetV2CvSimilarVideosQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public GetV2CvSimilarVideosLicenseEnum[] license;
    public GetV2CvSimilarVideosQueryParams withLicense(GetV2CvSimilarVideosLicenseEnum[] license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetV2CvSimilarVideosQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetV2CvSimilarVideosQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe")
    public Boolean safe;
    public GetV2CvSimilarVideosQueryParams withSafe(Boolean safe) {
        this.safe = safe;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetV2CvSimilarVideosViewEnum view;
    public GetV2CvSimilarVideosQueryParams withView(GetV2CvSimilarVideosViewEnum view) {
        this.view = view;
        return this;
    }
}
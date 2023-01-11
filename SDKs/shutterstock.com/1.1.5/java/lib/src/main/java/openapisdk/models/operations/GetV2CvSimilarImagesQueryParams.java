package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV2CvSimilarImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_id")
    public String assetId;
    public GetV2CvSimilarImagesQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public GetV2CvSimilarImagesQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public GetV2CvSimilarImagesLicenseEnum[] license;
    public GetV2CvSimilarImagesQueryParams withLicense(GetV2CvSimilarImagesLicenseEnum[] license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetV2CvSimilarImagesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetV2CvSimilarImagesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe")
    public Boolean safe;
    public GetV2CvSimilarImagesQueryParams withSafe(Boolean safe) {
        this.safe = safe;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetV2CvSimilarImagesViewEnum view;
    public GetV2CvSimilarImagesQueryParams withView(GetV2CvSimilarImagesViewEnum view) {
        this.view = view;
        return this;
    }
}
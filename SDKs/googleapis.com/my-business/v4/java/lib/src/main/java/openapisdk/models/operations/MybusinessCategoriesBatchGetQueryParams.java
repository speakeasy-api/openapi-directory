package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessCategoriesBatchGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public MybusinessCategoriesBatchGetQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public MybusinessCategoriesBatchGetQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public MybusinessCategoriesBatchGetQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public MybusinessCategoriesBatchGetQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryIds")
    public String[] categoryIds;
    public MybusinessCategoriesBatchGetQueryParams withCategoryIds(String[] categoryIds) {
        this.categoryIds = categoryIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public MybusinessCategoriesBatchGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public MybusinessCategoriesBatchGetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public MybusinessCategoriesBatchGetQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public MybusinessCategoriesBatchGetQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public MybusinessCategoriesBatchGetQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public MybusinessCategoriesBatchGetQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionCode")
    public String regionCode;
    public MybusinessCategoriesBatchGetQueryParams withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public MybusinessCategoriesBatchGetQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public MybusinessCategoriesBatchGetQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public MybusinessCategoriesBatchGetViewEnum view;
    public MybusinessCategoriesBatchGetQueryParams withView(MybusinessCategoriesBatchGetViewEnum view) {
        this.view = view;
        return this;
    }
}
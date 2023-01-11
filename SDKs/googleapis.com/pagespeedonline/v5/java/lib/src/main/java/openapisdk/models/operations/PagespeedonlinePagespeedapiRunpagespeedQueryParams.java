package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PagespeedonlinePagespeedapiRunpagespeedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=captchaToken")
    public String captchaToken;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withCaptchaToken(String captchaToken) {
        this.captchaToken = captchaToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[] category;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withCategory(PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[] category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=strategy")
    public PagespeedonlinePagespeedapiRunpagespeedStrategyEnum strategy;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withStrategy(PagespeedonlinePagespeedapiRunpagespeedStrategyEnum strategy) {
        this.strategy = strategy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=utm_campaign")
    public String utmCampaign;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUtmCampaign(String utmCampaign) {
        this.utmCampaign = utmCampaign;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=utm_source")
    public String utmSource;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUtmSource(String utmSource) {
        this.utmSource = utmSource;
        return this;
    }
}
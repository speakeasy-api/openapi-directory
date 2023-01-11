package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAssociationsessionsStartQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AdsensehostAssociationsessionsStartQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callbackUrl")
    public String callbackUrl;
    public AdsensehostAssociationsessionsStartQueryParams withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AdsensehostAssociationsessionsStartQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AdsensehostAssociationsessionsStartQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AdsensehostAssociationsessionsStartQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AdsensehostAssociationsessionsStartQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=productCode")
    public AdsensehostAssociationsessionsStartProductCodeEnum[] productCode;
    public AdsensehostAssociationsessionsStartQueryParams withProductCode(AdsensehostAssociationsessionsStartProductCodeEnum[] productCode) {
        this.productCode = productCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AdsensehostAssociationsessionsStartQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public AdsensehostAssociationsessionsStartQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userLocale")
    public String userLocale;
    public AdsensehostAssociationsessionsStartQueryParams withUserLocale(String userLocale) {
        this.userLocale = userLocale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=websiteLocale")
    public String websiteLocale;
    public AdsensehostAssociationsessionsStartQueryParams withWebsiteLocale(String websiteLocale) {
        this.websiteLocale = websiteLocale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=websiteUrl")
    public String websiteUrl;
    public AdsensehostAssociationsessionsStartQueryParams withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}
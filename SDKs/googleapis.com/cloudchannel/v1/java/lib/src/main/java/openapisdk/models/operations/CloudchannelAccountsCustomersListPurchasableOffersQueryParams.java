package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersListPurchasableOffersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changeOfferPurchase.entitlement")
    public String changeOfferPurchaseEntitlement;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withChangeOfferPurchaseEntitlement(String changeOfferPurchaseEntitlement) {
        this.changeOfferPurchaseEntitlement = changeOfferPurchaseEntitlement;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changeOfferPurchase.newSku")
    public String changeOfferPurchaseNewSku;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withChangeOfferPurchaseNewSku(String changeOfferPurchaseNewSku) {
        this.changeOfferPurchaseNewSku = changeOfferPurchaseNewSku;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createEntitlementPurchase.sku")
    public String createEntitlementPurchaseSku;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withCreateEntitlementPurchaseSku(String createEntitlementPurchaseSku) {
        this.createEntitlementPurchaseSku = createEntitlementPurchaseSku;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public CloudchannelAccountsCustomersListPurchasableOffersQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
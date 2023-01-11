package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersListPurchasableSkusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changeOfferPurchase.changeType")
    public CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum changeOfferPurchaseChangeType;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withChangeOfferPurchaseChangeType(CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum changeOfferPurchaseChangeType) {
        this.changeOfferPurchaseChangeType = changeOfferPurchaseChangeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changeOfferPurchase.entitlement")
    public String changeOfferPurchaseEntitlement;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withChangeOfferPurchaseEntitlement(String changeOfferPurchaseEntitlement) {
        this.changeOfferPurchaseEntitlement = changeOfferPurchaseEntitlement;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createEntitlementPurchase.product")
    public String createEntitlementPurchaseProduct;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withCreateEntitlementPurchaseProduct(String createEntitlementPurchaseProduct) {
        this.createEntitlementPurchaseProduct = createEntitlementPurchaseProduct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public CloudchannelAccountsCustomersListPurchasableSkusQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
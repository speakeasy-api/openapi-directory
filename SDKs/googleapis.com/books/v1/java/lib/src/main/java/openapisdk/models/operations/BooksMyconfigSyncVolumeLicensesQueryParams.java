package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMyconfigSyncVolumeLicensesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public BooksMyconfigSyncVolumeLicensesQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public BooksMyconfigSyncVolumeLicensesQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public BooksMyconfigSyncVolumeLicensesQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public BooksMyconfigSyncVolumeLicensesQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cpksver")
    public String cpksver;
    public BooksMyconfigSyncVolumeLicensesQueryParams withCpksver(String cpksver) {
        this.cpksver = cpksver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=features")
    public BooksMyconfigSyncVolumeLicensesFeaturesEnum[] features;
    public BooksMyconfigSyncVolumeLicensesQueryParams withFeatures(BooksMyconfigSyncVolumeLicensesFeaturesEnum[] features) {
        this.features = features;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public BooksMyconfigSyncVolumeLicensesQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeNonComicsSeries")
    public Boolean includeNonComicsSeries;
    public BooksMyconfigSyncVolumeLicensesQueryParams withIncludeNonComicsSeries(Boolean includeNonComicsSeries) {
        this.includeNonComicsSeries = includeNonComicsSeries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public BooksMyconfigSyncVolumeLicensesQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public BooksMyconfigSyncVolumeLicensesQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nonce")
    public String nonce;
    public BooksMyconfigSyncVolumeLicensesQueryParams withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public BooksMyconfigSyncVolumeLicensesQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public BooksMyconfigSyncVolumeLicensesQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public BooksMyconfigSyncVolumeLicensesQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showPreorders")
    public Boolean showPreorders;
    public BooksMyconfigSyncVolumeLicensesQueryParams withShowPreorders(Boolean showPreorders) {
        this.showPreorders = showPreorders;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public BooksMyconfigSyncVolumeLicensesQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public BooksMyconfigSyncVolumeLicensesQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public BooksMyconfigSyncVolumeLicensesQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=volumeIds")
    public String[] volumeIds;
    public BooksMyconfigSyncVolumeLicensesQueryParams withVolumeIds(String[] volumeIds) {
        this.volumeIds = volumeIds;
        return this;
    }
}
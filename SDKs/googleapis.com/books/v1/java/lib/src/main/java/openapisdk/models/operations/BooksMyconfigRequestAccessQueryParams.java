package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMyconfigRequestAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public BooksMyconfigRequestAccessQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public BooksMyconfigRequestAccessQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public BooksMyconfigRequestAccessQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public BooksMyconfigRequestAccessQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cpksver")
    public String cpksver;
    public BooksMyconfigRequestAccessQueryParams withCpksver(String cpksver) {
        this.cpksver = cpksver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public BooksMyconfigRequestAccessQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public BooksMyconfigRequestAccessQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licenseTypes")
    public BooksMyconfigRequestAccessLicenseTypesEnum licenseTypes;
    public BooksMyconfigRequestAccessQueryParams withLicenseTypes(BooksMyconfigRequestAccessLicenseTypesEnum licenseTypes) {
        this.licenseTypes = licenseTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public BooksMyconfigRequestAccessQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nonce")
    public String nonce;
    public BooksMyconfigRequestAccessQueryParams withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public BooksMyconfigRequestAccessQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public BooksMyconfigRequestAccessQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public BooksMyconfigRequestAccessQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public BooksMyconfigRequestAccessQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public BooksMyconfigRequestAccessQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public BooksMyconfigRequestAccessQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=volumeId")
    public String volumeId;
    public BooksMyconfigRequestAccessQueryParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
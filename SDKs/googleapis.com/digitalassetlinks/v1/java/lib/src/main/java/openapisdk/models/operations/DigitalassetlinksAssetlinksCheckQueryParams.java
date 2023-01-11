package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DigitalassetlinksAssetlinksCheckQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DigitalassetlinksAssetlinksCheckQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DigitalassetlinksAssetlinksCheckQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DigitalassetlinksAssetlinksCheckQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DigitalassetlinksAssetlinksCheckQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DigitalassetlinksAssetlinksCheckQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DigitalassetlinksAssetlinksCheckQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DigitalassetlinksAssetlinksCheckQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DigitalassetlinksAssetlinksCheckQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DigitalassetlinksAssetlinksCheckQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String relation;
    public DigitalassetlinksAssetlinksCheckQueryParams withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source.androidApp.certificate.sha256Fingerprint")
    public String sourceAndroidAppCertificateSha256Fingerprint;
    public DigitalassetlinksAssetlinksCheckQueryParams withSourceAndroidAppCertificateSha256Fingerprint(String sourceAndroidAppCertificateSha256Fingerprint) {
        this.sourceAndroidAppCertificateSha256Fingerprint = sourceAndroidAppCertificateSha256Fingerprint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source.androidApp.packageName")
    public String sourceAndroidAppPackageName;
    public DigitalassetlinksAssetlinksCheckQueryParams withSourceAndroidAppPackageName(String sourceAndroidAppPackageName) {
        this.sourceAndroidAppPackageName = sourceAndroidAppPackageName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source.web.site")
    public String sourceWebSite;
    public DigitalassetlinksAssetlinksCheckQueryParams withSourceWebSite(String sourceWebSite) {
        this.sourceWebSite = sourceWebSite;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target.androidApp.certificate.sha256Fingerprint")
    public String targetAndroidAppCertificateSha256Fingerprint;
    public DigitalassetlinksAssetlinksCheckQueryParams withTargetAndroidAppCertificateSha256Fingerprint(String targetAndroidAppCertificateSha256Fingerprint) {
        this.targetAndroidAppCertificateSha256Fingerprint = targetAndroidAppCertificateSha256Fingerprint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target.androidApp.packageName")
    public String targetAndroidAppPackageName;
    public DigitalassetlinksAssetlinksCheckQueryParams withTargetAndroidAppPackageName(String targetAndroidAppPackageName) {
        this.targetAndroidAppPackageName = targetAndroidAppPackageName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target.web.site")
    public String targetWebSite;
    public DigitalassetlinksAssetlinksCheckQueryParams withTargetWebSite(String targetWebSite) {
        this.targetWebSite = targetWebSite;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DigitalassetlinksAssetlinksCheckQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DigitalassetlinksAssetlinksCheckQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
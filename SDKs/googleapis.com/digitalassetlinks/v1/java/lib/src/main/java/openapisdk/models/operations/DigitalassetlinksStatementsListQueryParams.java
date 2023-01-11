package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DigitalassetlinksStatementsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DigitalassetlinksStatementsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DigitalassetlinksStatementsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DigitalassetlinksStatementsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DigitalassetlinksStatementsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DigitalassetlinksStatementsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DigitalassetlinksStatementsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DigitalassetlinksStatementsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DigitalassetlinksStatementsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DigitalassetlinksStatementsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String relation;
    public DigitalassetlinksStatementsListQueryParams withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source.androidApp.certificate.sha256Fingerprint")
    public String sourceAndroidAppCertificateSha256Fingerprint;
    public DigitalassetlinksStatementsListQueryParams withSourceAndroidAppCertificateSha256Fingerprint(String sourceAndroidAppCertificateSha256Fingerprint) {
        this.sourceAndroidAppCertificateSha256Fingerprint = sourceAndroidAppCertificateSha256Fingerprint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source.androidApp.packageName")
    public String sourceAndroidAppPackageName;
    public DigitalassetlinksStatementsListQueryParams withSourceAndroidAppPackageName(String sourceAndroidAppPackageName) {
        this.sourceAndroidAppPackageName = sourceAndroidAppPackageName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source.web.site")
    public String sourceWebSite;
    public DigitalassetlinksStatementsListQueryParams withSourceWebSite(String sourceWebSite) {
        this.sourceWebSite = sourceWebSite;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DigitalassetlinksStatementsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DigitalassetlinksStatementsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
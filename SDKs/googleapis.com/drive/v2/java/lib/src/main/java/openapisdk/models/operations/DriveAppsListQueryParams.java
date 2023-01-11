package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveAppsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveAppsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appFilterExtensions")
    public String appFilterExtensions;
    public DriveAppsListQueryParams withAppFilterExtensions(String appFilterExtensions) {
        this.appFilterExtensions = appFilterExtensions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appFilterMimeTypes")
    public String appFilterMimeTypes;
    public DriveAppsListQueryParams withAppFilterMimeTypes(String appFilterMimeTypes) {
        this.appFilterMimeTypes = appFilterMimeTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveAppsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveAppsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public DriveAppsListQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveAppsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveAppsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveAppsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveAppsListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
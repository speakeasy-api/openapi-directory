package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesUntrashQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveFilesUntrashQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveFilesUntrashQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLabels")
    public String includeLabels;
    public DriveFilesUntrashQueryParams withIncludeLabels(String includeLabels) {
        this.includeLabels = includeLabels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePermissionsForView")
    public String includePermissionsForView;
    public DriveFilesUntrashQueryParams withIncludePermissionsForView(String includePermissionsForView) {
        this.includePermissionsForView = includePermissionsForView;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveFilesUntrashQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveFilesUntrashQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveFilesUntrashQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveFilesUntrashQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveFilesUntrashQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveFilesUntrashQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveFilesUntrashQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
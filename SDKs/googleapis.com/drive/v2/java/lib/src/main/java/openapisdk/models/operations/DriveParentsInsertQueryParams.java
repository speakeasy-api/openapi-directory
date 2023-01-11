package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveParentsInsertQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveParentsInsertQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enforceSingleParent")
    public Boolean enforceSingleParent;
    public DriveParentsInsertQueryParams withEnforceSingleParent(Boolean enforceSingleParent) {
        this.enforceSingleParent = enforceSingleParent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveParentsInsertQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveParentsInsertQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveParentsInsertQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveParentsInsertQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveParentsInsertQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveParentsInsertQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveParentsInsertQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveParentsInsertQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
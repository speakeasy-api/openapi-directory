package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsInsertQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DrivePermissionsInsertQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=emailMessage")
    public String emailMessage;
    public DrivePermissionsInsertQueryParams withEmailMessage(String emailMessage) {
        this.emailMessage = emailMessage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enforceSingleParent")
    public Boolean enforceSingleParent;
    public DrivePermissionsInsertQueryParams withEnforceSingleParent(Boolean enforceSingleParent) {
        this.enforceSingleParent = enforceSingleParent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DrivePermissionsInsertQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DrivePermissionsInsertQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=moveToNewOwnersRoot")
    public Boolean moveToNewOwnersRoot;
    public DrivePermissionsInsertQueryParams withMoveToNewOwnersRoot(Boolean moveToNewOwnersRoot) {
        this.moveToNewOwnersRoot = moveToNewOwnersRoot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DrivePermissionsInsertQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DrivePermissionsInsertQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DrivePermissionsInsertQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendNotificationEmails")
    public Boolean sendNotificationEmails;
    public DrivePermissionsInsertQueryParams withSendNotificationEmails(Boolean sendNotificationEmails) {
        this.sendNotificationEmails = sendNotificationEmails;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DrivePermissionsInsertQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DrivePermissionsInsertQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useDomainAdminAccess")
    public Boolean useDomainAdminAccess;
    public DrivePermissionsInsertQueryParams withUseDomainAdminAccess(Boolean useDomainAdminAccess) {
        this.useDomainAdminAccess = useDomainAdminAccess;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DrivePermissionsInsertQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
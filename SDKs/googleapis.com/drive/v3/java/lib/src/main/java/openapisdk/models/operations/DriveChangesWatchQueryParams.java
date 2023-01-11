package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChangesWatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveChangesWatchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=driveId")
    public String driveId;
    public DriveChangesWatchQueryParams withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveChangesWatchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeCorpusRemovals")
    public Boolean includeCorpusRemovals;
    public DriveChangesWatchQueryParams withIncludeCorpusRemovals(Boolean includeCorpusRemovals) {
        this.includeCorpusRemovals = includeCorpusRemovals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeItemsFromAllDrives")
    public Boolean includeItemsFromAllDrives;
    public DriveChangesWatchQueryParams withIncludeItemsFromAllDrives(Boolean includeItemsFromAllDrives) {
        this.includeItemsFromAllDrives = includeItemsFromAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLabels")
    public String includeLabels;
    public DriveChangesWatchQueryParams withIncludeLabels(String includeLabels) {
        this.includeLabels = includeLabels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePermissionsForView")
    public String includePermissionsForView;
    public DriveChangesWatchQueryParams withIncludePermissionsForView(String includePermissionsForView) {
        this.includePermissionsForView = includePermissionsForView;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeRemoved")
    public Boolean includeRemoved;
    public DriveChangesWatchQueryParams withIncludeRemoved(Boolean includeRemoved) {
        this.includeRemoved = includeRemoved;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTeamDriveItems")
    public Boolean includeTeamDriveItems;
    public DriveChangesWatchQueryParams withIncludeTeamDriveItems(Boolean includeTeamDriveItems) {
        this.includeTeamDriveItems = includeTeamDriveItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveChangesWatchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveChangesWatchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public DriveChangesWatchQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DriveChangesWatchQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveChangesWatchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveChangesWatchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=restrictToMyDrive")
    public Boolean restrictToMyDrive;
    public DriveChangesWatchQueryParams withRestrictToMyDrive(Boolean restrictToMyDrive) {
        this.restrictToMyDrive = restrictToMyDrive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spaces")
    public String spaces;
    public DriveChangesWatchQueryParams withSpaces(String spaces) {
        this.spaces = spaces;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveChangesWatchQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveChangesWatchQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=teamDriveId")
    public String teamDriveId;
    public DriveChangesWatchQueryParams withTeamDriveId(String teamDriveId) {
        this.teamDriveId = teamDriveId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveChangesWatchQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
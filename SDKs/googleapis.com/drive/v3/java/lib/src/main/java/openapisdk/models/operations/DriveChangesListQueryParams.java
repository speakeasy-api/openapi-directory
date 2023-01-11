package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChangesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveChangesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=driveId")
    public String driveId;
    public DriveChangesListQueryParams withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveChangesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeCorpusRemovals")
    public Boolean includeCorpusRemovals;
    public DriveChangesListQueryParams withIncludeCorpusRemovals(Boolean includeCorpusRemovals) {
        this.includeCorpusRemovals = includeCorpusRemovals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeItemsFromAllDrives")
    public Boolean includeItemsFromAllDrives;
    public DriveChangesListQueryParams withIncludeItemsFromAllDrives(Boolean includeItemsFromAllDrives) {
        this.includeItemsFromAllDrives = includeItemsFromAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLabels")
    public String includeLabels;
    public DriveChangesListQueryParams withIncludeLabels(String includeLabels) {
        this.includeLabels = includeLabels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePermissionsForView")
    public String includePermissionsForView;
    public DriveChangesListQueryParams withIncludePermissionsForView(String includePermissionsForView) {
        this.includePermissionsForView = includePermissionsForView;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeRemoved")
    public Boolean includeRemoved;
    public DriveChangesListQueryParams withIncludeRemoved(Boolean includeRemoved) {
        this.includeRemoved = includeRemoved;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTeamDriveItems")
    public Boolean includeTeamDriveItems;
    public DriveChangesListQueryParams withIncludeTeamDriveItems(Boolean includeTeamDriveItems) {
        this.includeTeamDriveItems = includeTeamDriveItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveChangesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveChangesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public DriveChangesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public DriveChangesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveChangesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveChangesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=restrictToMyDrive")
    public Boolean restrictToMyDrive;
    public DriveChangesListQueryParams withRestrictToMyDrive(Boolean restrictToMyDrive) {
        this.restrictToMyDrive = restrictToMyDrive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spaces")
    public String spaces;
    public DriveChangesListQueryParams withSpaces(String spaces) {
        this.spaces = spaces;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveChangesListQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveChangesListQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=teamDriveId")
    public String teamDriveId;
    public DriveChangesListQueryParams withTeamDriveId(String teamDriveId) {
        this.teamDriveId = teamDriveId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveChangesListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
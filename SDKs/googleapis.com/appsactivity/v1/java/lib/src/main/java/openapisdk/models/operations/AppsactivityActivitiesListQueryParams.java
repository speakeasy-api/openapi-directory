package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsactivityActivitiesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AppsactivityActivitiesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drive.ancestorId")
    public String driveAncestorId;
    public AppsactivityActivitiesListQueryParams withDriveAncestorId(String driveAncestorId) {
        this.driveAncestorId = driveAncestorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drive.fileId")
    public String driveFileId;
    public AppsactivityActivitiesListQueryParams withDriveFileId(String driveFileId) {
        this.driveFileId = driveFileId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AppsactivityActivitiesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupingStrategy")
    public AppsactivityActivitiesListGroupingStrategyEnum groupingStrategy;
    public AppsactivityActivitiesListQueryParams withGroupingStrategy(AppsactivityActivitiesListGroupingStrategyEnum groupingStrategy) {
        this.groupingStrategy = groupingStrategy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AppsactivityActivitiesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AppsactivityActivitiesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public AppsactivityActivitiesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public AppsactivityActivitiesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AppsactivityActivitiesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AppsactivityActivitiesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public AppsactivityActivitiesListQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public AppsactivityActivitiesListQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public AppsactivityActivitiesListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
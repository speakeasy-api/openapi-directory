package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CalendarEventsInstancesQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alwaysIncludeEmail")
    public Boolean alwaysIncludeEmail;
    public CalendarEventsInstancesQueryParams withAlwaysIncludeEmail(Boolean alwaysIncludeEmail) {
        this.alwaysIncludeEmail = alwaysIncludeEmail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CalendarEventsInstancesQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CalendarEventsInstancesQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxAttendees")
    public Long maxAttendees;
    public CalendarEventsInstancesQueryParams withMaxAttendees(Long maxAttendees) {
        this.maxAttendees = maxAttendees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public CalendarEventsInstancesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CalendarEventsInstancesQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=originalStart")
    public String originalStart;
    public CalendarEventsInstancesQueryParams withOriginalStart(String originalStart) {
        this.originalStart = originalStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public CalendarEventsInstancesQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CalendarEventsInstancesQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CalendarEventsInstancesQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showDeleted")
    public Boolean showDeleted;
    public CalendarEventsInstancesQueryParams withShowDeleted(Boolean showDeleted) {
        this.showDeleted = showDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeMax")
    public String timeMax;
    public CalendarEventsInstancesQueryParams withTimeMax(String timeMax) {
        this.timeMax = timeMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeMin")
    public String timeMin;
    public CalendarEventsInstancesQueryParams withTimeMin(String timeMin) {
        this.timeMin = timeMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeZone")
    public String timeZone;
    public CalendarEventsInstancesQueryParams withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public CalendarEventsInstancesQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
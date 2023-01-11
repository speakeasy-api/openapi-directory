package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CalendarEventsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alwaysIncludeEmail")
    public Boolean alwaysIncludeEmail;
    public CalendarEventsListQueryParams withAlwaysIncludeEmail(Boolean alwaysIncludeEmail) {
        this.alwaysIncludeEmail = alwaysIncludeEmail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CalendarEventsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iCalUID")
    public String iCalUID;
    public CalendarEventsListQueryParams withICalUid(String iCalUID) {
        this.iCalUID = iCalUID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CalendarEventsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxAttendees")
    public Long maxAttendees;
    public CalendarEventsListQueryParams withMaxAttendees(Long maxAttendees) {
        this.maxAttendees = maxAttendees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public CalendarEventsListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CalendarEventsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public CalendarEventsListOrderByEnum orderBy;
    public CalendarEventsListQueryParams withOrderBy(CalendarEventsListOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public CalendarEventsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CalendarEventsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=privateExtendedProperty")
    public String[] privateExtendedProperty;
    public CalendarEventsListQueryParams withPrivateExtendedProperty(String[] privateExtendedProperty) {
        this.privateExtendedProperty = privateExtendedProperty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public CalendarEventsListQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CalendarEventsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharedExtendedProperty")
    public String[] sharedExtendedProperty;
    public CalendarEventsListQueryParams withSharedExtendedProperty(String[] sharedExtendedProperty) {
        this.sharedExtendedProperty = sharedExtendedProperty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showDeleted")
    public Boolean showDeleted;
    public CalendarEventsListQueryParams withShowDeleted(Boolean showDeleted) {
        this.showDeleted = showDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showHiddenInvitations")
    public Boolean showHiddenInvitations;
    public CalendarEventsListQueryParams withShowHiddenInvitations(Boolean showHiddenInvitations) {
        this.showHiddenInvitations = showHiddenInvitations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=singleEvents")
    public Boolean singleEvents;
    public CalendarEventsListQueryParams withSingleEvents(Boolean singleEvents) {
        this.singleEvents = singleEvents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=syncToken")
    public String syncToken;
    public CalendarEventsListQueryParams withSyncToken(String syncToken) {
        this.syncToken = syncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeMax")
    public String timeMax;
    public CalendarEventsListQueryParams withTimeMax(String timeMax) {
        this.timeMax = timeMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeMin")
    public String timeMin;
    public CalendarEventsListQueryParams withTimeMin(String timeMin) {
        this.timeMin = timeMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeZone")
    public String timeZone;
    public CalendarEventsListQueryParams withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedMin")
    public String updatedMin;
    public CalendarEventsListQueryParams withUpdatedMin(String updatedMin) {
        this.updatedMin = updatedMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public CalendarEventsListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
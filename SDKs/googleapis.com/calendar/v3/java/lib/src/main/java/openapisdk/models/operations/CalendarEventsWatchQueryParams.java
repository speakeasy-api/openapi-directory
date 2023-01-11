package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsWatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CalendarEventsWatchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alwaysIncludeEmail")
    public Boolean alwaysIncludeEmail;
    public CalendarEventsWatchQueryParams withAlwaysIncludeEmail(Boolean alwaysIncludeEmail) {
        this.alwaysIncludeEmail = alwaysIncludeEmail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CalendarEventsWatchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iCalUID")
    public String iCalUID;
    public CalendarEventsWatchQueryParams withICalUid(String iCalUID) {
        this.iCalUID = iCalUID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CalendarEventsWatchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxAttendees")
    public Long maxAttendees;
    public CalendarEventsWatchQueryParams withMaxAttendees(Long maxAttendees) {
        this.maxAttendees = maxAttendees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public CalendarEventsWatchQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CalendarEventsWatchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public CalendarEventsWatchOrderByEnum orderBy;
    public CalendarEventsWatchQueryParams withOrderBy(CalendarEventsWatchOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public CalendarEventsWatchQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CalendarEventsWatchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=privateExtendedProperty")
    public String[] privateExtendedProperty;
    public CalendarEventsWatchQueryParams withPrivateExtendedProperty(String[] privateExtendedProperty) {
        this.privateExtendedProperty = privateExtendedProperty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public CalendarEventsWatchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CalendarEventsWatchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharedExtendedProperty")
    public String[] sharedExtendedProperty;
    public CalendarEventsWatchQueryParams withSharedExtendedProperty(String[] sharedExtendedProperty) {
        this.sharedExtendedProperty = sharedExtendedProperty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showDeleted")
    public Boolean showDeleted;
    public CalendarEventsWatchQueryParams withShowDeleted(Boolean showDeleted) {
        this.showDeleted = showDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showHiddenInvitations")
    public Boolean showHiddenInvitations;
    public CalendarEventsWatchQueryParams withShowHiddenInvitations(Boolean showHiddenInvitations) {
        this.showHiddenInvitations = showHiddenInvitations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=singleEvents")
    public Boolean singleEvents;
    public CalendarEventsWatchQueryParams withSingleEvents(Boolean singleEvents) {
        this.singleEvents = singleEvents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=syncToken")
    public String syncToken;
    public CalendarEventsWatchQueryParams withSyncToken(String syncToken) {
        this.syncToken = syncToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeMax")
    public String timeMax;
    public CalendarEventsWatchQueryParams withTimeMax(String timeMax) {
        this.timeMax = timeMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeMin")
    public String timeMin;
    public CalendarEventsWatchQueryParams withTimeMin(String timeMin) {
        this.timeMin = timeMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeZone")
    public String timeZone;
    public CalendarEventsWatchQueryParams withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedMin")
    public String updatedMin;
    public CalendarEventsWatchQueryParams withUpdatedMin(String updatedMin) {
        this.updatedMin = updatedMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public CalendarEventsWatchQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
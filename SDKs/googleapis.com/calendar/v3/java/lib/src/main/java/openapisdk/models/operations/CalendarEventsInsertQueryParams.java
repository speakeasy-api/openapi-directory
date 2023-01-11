package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsInsertQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CalendarEventsInsertQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conferenceDataVersion")
    public Long conferenceDataVersion;
    public CalendarEventsInsertQueryParams withConferenceDataVersion(Long conferenceDataVersion) {
        this.conferenceDataVersion = conferenceDataVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CalendarEventsInsertQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CalendarEventsInsertQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxAttendees")
    public Long maxAttendees;
    public CalendarEventsInsertQueryParams withMaxAttendees(Long maxAttendees) {
        this.maxAttendees = maxAttendees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CalendarEventsInsertQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CalendarEventsInsertQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CalendarEventsInsertQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendNotifications")
    public Boolean sendNotifications;
    public CalendarEventsInsertQueryParams withSendNotifications(Boolean sendNotifications) {
        this.sendNotifications = sendNotifications;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendUpdates")
    public CalendarEventsInsertSendUpdatesEnum sendUpdates;
    public CalendarEventsInsertQueryParams withSendUpdates(CalendarEventsInsertSendUpdatesEnum sendUpdates) {
        this.sendUpdates = sendUpdates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAttachments")
    public Boolean supportsAttachments;
    public CalendarEventsInsertQueryParams withSupportsAttachments(Boolean supportsAttachments) {
        this.supportsAttachments = supportsAttachments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public CalendarEventsInsertQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
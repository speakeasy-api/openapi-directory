package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsPatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CalendarEventsPatchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alwaysIncludeEmail")
    public Boolean alwaysIncludeEmail;
    public CalendarEventsPatchQueryParams withAlwaysIncludeEmail(Boolean alwaysIncludeEmail) {
        this.alwaysIncludeEmail = alwaysIncludeEmail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conferenceDataVersion")
    public Long conferenceDataVersion;
    public CalendarEventsPatchQueryParams withConferenceDataVersion(Long conferenceDataVersion) {
        this.conferenceDataVersion = conferenceDataVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CalendarEventsPatchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CalendarEventsPatchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxAttendees")
    public Long maxAttendees;
    public CalendarEventsPatchQueryParams withMaxAttendees(Long maxAttendees) {
        this.maxAttendees = maxAttendees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CalendarEventsPatchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CalendarEventsPatchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CalendarEventsPatchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendNotifications")
    public Boolean sendNotifications;
    public CalendarEventsPatchQueryParams withSendNotifications(Boolean sendNotifications) {
        this.sendNotifications = sendNotifications;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendUpdates")
    public CalendarEventsPatchSendUpdatesEnum sendUpdates;
    public CalendarEventsPatchQueryParams withSendUpdates(CalendarEventsPatchSendUpdatesEnum sendUpdates) {
        this.sendUpdates = sendUpdates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAttachments")
    public Boolean supportsAttachments;
    public CalendarEventsPatchQueryParams withSupportsAttachments(Boolean supportsAttachments) {
        this.supportsAttachments = supportsAttachments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public CalendarEventsPatchQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
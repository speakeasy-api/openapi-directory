package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsQuickAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CalendarEventsQuickAddQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CalendarEventsQuickAddQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CalendarEventsQuickAddQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CalendarEventsQuickAddQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CalendarEventsQuickAddQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CalendarEventsQuickAddQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendNotifications")
    public Boolean sendNotifications;
    public CalendarEventsQuickAddQueryParams withSendNotifications(Boolean sendNotifications) {
        this.sendNotifications = sendNotifications;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendUpdates")
    public CalendarEventsQuickAddSendUpdatesEnum sendUpdates;
    public CalendarEventsQuickAddQueryParams withSendUpdates(CalendarEventsQuickAddSendUpdatesEnum sendUpdates) {
        this.sendUpdates = sendUpdates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public CalendarEventsQuickAddQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public CalendarEventsQuickAddQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
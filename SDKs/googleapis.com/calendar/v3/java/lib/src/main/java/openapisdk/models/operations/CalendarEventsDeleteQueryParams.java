package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CalendarEventsDeleteQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CalendarEventsDeleteQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CalendarEventsDeleteQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CalendarEventsDeleteQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CalendarEventsDeleteQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CalendarEventsDeleteQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendNotifications")
    public Boolean sendNotifications;
    public CalendarEventsDeleteQueryParams withSendNotifications(Boolean sendNotifications) {
        this.sendNotifications = sendNotifications;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendUpdates")
    public CalendarEventsDeleteSendUpdatesEnum sendUpdates;
    public CalendarEventsDeleteQueryParams withSendUpdates(CalendarEventsDeleteSendUpdatesEnum sendUpdates) {
        this.sendUpdates = sendUpdates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public CalendarEventsDeleteQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
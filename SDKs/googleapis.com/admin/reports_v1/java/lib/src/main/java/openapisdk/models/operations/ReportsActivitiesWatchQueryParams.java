package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsActivitiesWatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public ReportsActivitiesWatchQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public ReportsActivitiesWatchQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=actorIpAddress")
    public String actorIpAddress;
    public ReportsActivitiesWatchQueryParams withActorIpAddress(String actorIpAddress) {
        this.actorIpAddress = actorIpAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public ReportsActivitiesWatchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public ReportsActivitiesWatchQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customerId")
    public String customerId;
    public ReportsActivitiesWatchQueryParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public String endTime;
    public ReportsActivitiesWatchQueryParams withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventName")
    public String eventName;
    public ReportsActivitiesWatchQueryParams withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ReportsActivitiesWatchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filters")
    public String filters;
    public ReportsActivitiesWatchQueryParams withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupIdFilter")
    public String groupIdFilter;
    public ReportsActivitiesWatchQueryParams withGroupIdFilter(String groupIdFilter) {
        this.groupIdFilter = groupIdFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public ReportsActivitiesWatchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ReportsActivitiesWatchQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public ReportsActivitiesWatchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orgUnitID")
    public String orgUnitID;
    public ReportsActivitiesWatchQueryParams withOrgUnitId(String orgUnitID) {
        this.orgUnitID = orgUnitID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public ReportsActivitiesWatchQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public ReportsActivitiesWatchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public ReportsActivitiesWatchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public String startTime;
    public ReportsActivitiesWatchQueryParams withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public ReportsActivitiesWatchQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public ReportsActivitiesWatchQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsReportsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public YoutubereportingJobsReportsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public YoutubereportingJobsReportsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public YoutubereportingJobsReportsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public YoutubereportingJobsReportsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdAfter")
    public String createdAfter;
    public YoutubereportingJobsReportsListQueryParams withCreatedAfter(String createdAfter) {
        this.createdAfter = createdAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public YoutubereportingJobsReportsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public YoutubereportingJobsReportsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public YoutubereportingJobsReportsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onBehalfOfContentOwner")
    public String onBehalfOfContentOwner;
    public YoutubereportingJobsReportsListQueryParams withOnBehalfOfContentOwner(String onBehalfOfContentOwner) {
        this.onBehalfOfContentOwner = onBehalfOfContentOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public YoutubereportingJobsReportsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public YoutubereportingJobsReportsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public YoutubereportingJobsReportsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public YoutubereportingJobsReportsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTimeAtOrAfter")
    public String startTimeAtOrAfter;
    public YoutubereportingJobsReportsListQueryParams withStartTimeAtOrAfter(String startTimeAtOrAfter) {
        this.startTimeAtOrAfter = startTimeAtOrAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTimeBefore")
    public String startTimeBefore;
    public YoutubereportingJobsReportsListQueryParams withStartTimeBefore(String startTimeBefore) {
        this.startTimeBefore = startTimeBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public YoutubereportingJobsReportsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public YoutubereportingJobsReportsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
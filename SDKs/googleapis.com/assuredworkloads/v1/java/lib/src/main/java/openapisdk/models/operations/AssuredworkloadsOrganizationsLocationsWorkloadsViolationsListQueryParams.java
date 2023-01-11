package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval.endTime")
    public String intervalEndTime;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withIntervalEndTime(String intervalEndTime) {
        this.intervalEndTime = intervalEndTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval.startTime")
    public String intervalStartTime;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withIntervalStartTime(String intervalStartTime) {
        this.intervalStartTime = intervalStartTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
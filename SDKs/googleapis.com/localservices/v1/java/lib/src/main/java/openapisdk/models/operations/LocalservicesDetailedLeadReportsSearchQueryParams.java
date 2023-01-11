package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocalservicesDetailedLeadReportsSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public LocalservicesDetailedLeadReportsSearchQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public LocalservicesDetailedLeadReportsSearchQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public LocalservicesDetailedLeadReportsSearchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public LocalservicesDetailedLeadReportsSearchQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.day")
    public Long endDateDay;
    public LocalservicesDetailedLeadReportsSearchQueryParams withEndDateDay(Long endDateDay) {
        this.endDateDay = endDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.month")
    public Long endDateMonth;
    public LocalservicesDetailedLeadReportsSearchQueryParams withEndDateMonth(Long endDateMonth) {
        this.endDateMonth = endDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.year")
    public Long endDateYear;
    public LocalservicesDetailedLeadReportsSearchQueryParams withEndDateYear(Long endDateYear) {
        this.endDateYear = endDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public LocalservicesDetailedLeadReportsSearchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public LocalservicesDetailedLeadReportsSearchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public LocalservicesDetailedLeadReportsSearchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public LocalservicesDetailedLeadReportsSearchQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public LocalservicesDetailedLeadReportsSearchQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public LocalservicesDetailedLeadReportsSearchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public LocalservicesDetailedLeadReportsSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public LocalservicesDetailedLeadReportsSearchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.day")
    public Long startDateDay;
    public LocalservicesDetailedLeadReportsSearchQueryParams withStartDateDay(Long startDateDay) {
        this.startDateDay = startDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.month")
    public Long startDateMonth;
    public LocalservicesDetailedLeadReportsSearchQueryParams withStartDateMonth(Long startDateMonth) {
        this.startDateMonth = startDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.year")
    public Long startDateYear;
    public LocalservicesDetailedLeadReportsSearchQueryParams withStartDateYear(Long startDateYear) {
        this.startDateYear = startDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public LocalservicesDetailedLeadReportsSearchQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public LocalservicesDetailedLeadReportsSearchQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
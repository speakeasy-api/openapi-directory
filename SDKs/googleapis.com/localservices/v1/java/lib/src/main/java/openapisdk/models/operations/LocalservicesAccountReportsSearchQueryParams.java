package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocalservicesAccountReportsSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public LocalservicesAccountReportsSearchQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public LocalservicesAccountReportsSearchQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public LocalservicesAccountReportsSearchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public LocalservicesAccountReportsSearchQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.day")
    public Long endDateDay;
    public LocalservicesAccountReportsSearchQueryParams withEndDateDay(Long endDateDay) {
        this.endDateDay = endDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.month")
    public Long endDateMonth;
    public LocalservicesAccountReportsSearchQueryParams withEndDateMonth(Long endDateMonth) {
        this.endDateMonth = endDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.year")
    public Long endDateYear;
    public LocalservicesAccountReportsSearchQueryParams withEndDateYear(Long endDateYear) {
        this.endDateYear = endDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public LocalservicesAccountReportsSearchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public LocalservicesAccountReportsSearchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public LocalservicesAccountReportsSearchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public LocalservicesAccountReportsSearchQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public LocalservicesAccountReportsSearchQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public LocalservicesAccountReportsSearchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public LocalservicesAccountReportsSearchQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public LocalservicesAccountReportsSearchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.day")
    public Long startDateDay;
    public LocalservicesAccountReportsSearchQueryParams withStartDateDay(Long startDateDay) {
        this.startDateDay = startDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.month")
    public Long startDateMonth;
    public LocalservicesAccountReportsSearchQueryParams withStartDateMonth(Long startDateMonth) {
        this.startDateMonth = startDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.year")
    public Long startDateYear;
    public LocalservicesAccountReportsSearchQueryParams withStartDateYear(Long startDateYear) {
        this.startDateYear = startDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public LocalservicesAccountReportsSearchQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public LocalservicesAccountReportsSearchQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
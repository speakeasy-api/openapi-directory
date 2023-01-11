package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsGenerateCsvQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public AdsenseAccountsReportsGenerateCsvQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public AdsenseAccountsReportsGenerateCsvQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AdsenseAccountsReportsGenerateCsvQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public AdsenseAccountsReportsGenerateCsvQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currencyCode")
    public String currencyCode;
    public AdsenseAccountsReportsGenerateCsvQueryParams withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateRange")
    public AdsenseAccountsReportsGenerateCsvDateRangeEnum dateRange;
    public AdsenseAccountsReportsGenerateCsvQueryParams withDateRange(AdsenseAccountsReportsGenerateCsvDateRangeEnum dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dimensions")
    public AdsenseAccountsReportsGenerateCsvDimensionsEnum[] dimensions;
    public AdsenseAccountsReportsGenerateCsvQueryParams withDimensions(AdsenseAccountsReportsGenerateCsvDimensionsEnum[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.day")
    public Long endDateDay;
    public AdsenseAccountsReportsGenerateCsvQueryParams withEndDateDay(Long endDateDay) {
        this.endDateDay = endDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.month")
    public Long endDateMonth;
    public AdsenseAccountsReportsGenerateCsvQueryParams withEndDateMonth(Long endDateMonth) {
        this.endDateMonth = endDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.year")
    public Long endDateYear;
    public AdsenseAccountsReportsGenerateCsvQueryParams withEndDateYear(Long endDateYear) {
        this.endDateYear = endDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AdsenseAccountsReportsGenerateCsvQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filters")
    public String[] filters;
    public AdsenseAccountsReportsGenerateCsvQueryParams withFilters(String[] filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AdsenseAccountsReportsGenerateCsvQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public AdsenseAccountsReportsGenerateCsvQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public AdsenseAccountsReportsGenerateCsvQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public AdsenseAccountsReportsGenerateCsvMetricsEnum[] metrics;
    public AdsenseAccountsReportsGenerateCsvQueryParams withMetrics(AdsenseAccountsReportsGenerateCsvMetricsEnum[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AdsenseAccountsReportsGenerateCsvQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public String[] orderBy;
    public AdsenseAccountsReportsGenerateCsvQueryParams withOrderBy(String[] orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AdsenseAccountsReportsGenerateCsvQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AdsenseAccountsReportsGenerateCsvQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportingTimeZone")
    public AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum reportingTimeZone;
    public AdsenseAccountsReportsGenerateCsvQueryParams withReportingTimeZone(AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum reportingTimeZone) {
        this.reportingTimeZone = reportingTimeZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.day")
    public Long startDateDay;
    public AdsenseAccountsReportsGenerateCsvQueryParams withStartDateDay(Long startDateDay) {
        this.startDateDay = startDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.month")
    public Long startDateMonth;
    public AdsenseAccountsReportsGenerateCsvQueryParams withStartDateMonth(Long startDateMonth) {
        this.startDateMonth = startDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.year")
    public Long startDateYear;
    public AdsenseAccountsReportsGenerateCsvQueryParams withStartDateYear(Long startDateYear) {
        this.startDateYear = startDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public AdsenseAccountsReportsGenerateCsvQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public AdsenseAccountsReportsGenerateCsvQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
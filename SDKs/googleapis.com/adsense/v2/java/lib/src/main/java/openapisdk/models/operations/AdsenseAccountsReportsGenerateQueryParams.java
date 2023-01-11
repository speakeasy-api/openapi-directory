package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsGenerateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public AdsenseAccountsReportsGenerateQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public AdsenseAccountsReportsGenerateQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AdsenseAccountsReportsGenerateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public AdsenseAccountsReportsGenerateQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currencyCode")
    public String currencyCode;
    public AdsenseAccountsReportsGenerateQueryParams withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateRange")
    public AdsenseAccountsReportsGenerateDateRangeEnum dateRange;
    public AdsenseAccountsReportsGenerateQueryParams withDateRange(AdsenseAccountsReportsGenerateDateRangeEnum dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dimensions")
    public AdsenseAccountsReportsGenerateDimensionsEnum[] dimensions;
    public AdsenseAccountsReportsGenerateQueryParams withDimensions(AdsenseAccountsReportsGenerateDimensionsEnum[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.day")
    public Long endDateDay;
    public AdsenseAccountsReportsGenerateQueryParams withEndDateDay(Long endDateDay) {
        this.endDateDay = endDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.month")
    public Long endDateMonth;
    public AdsenseAccountsReportsGenerateQueryParams withEndDateMonth(Long endDateMonth) {
        this.endDateMonth = endDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.year")
    public Long endDateYear;
    public AdsenseAccountsReportsGenerateQueryParams withEndDateYear(Long endDateYear) {
        this.endDateYear = endDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AdsenseAccountsReportsGenerateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filters")
    public String[] filters;
    public AdsenseAccountsReportsGenerateQueryParams withFilters(String[] filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AdsenseAccountsReportsGenerateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public AdsenseAccountsReportsGenerateQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public AdsenseAccountsReportsGenerateQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public AdsenseAccountsReportsGenerateMetricsEnum[] metrics;
    public AdsenseAccountsReportsGenerateQueryParams withMetrics(AdsenseAccountsReportsGenerateMetricsEnum[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AdsenseAccountsReportsGenerateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public String[] orderBy;
    public AdsenseAccountsReportsGenerateQueryParams withOrderBy(String[] orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AdsenseAccountsReportsGenerateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AdsenseAccountsReportsGenerateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportingTimeZone")
    public AdsenseAccountsReportsGenerateReportingTimeZoneEnum reportingTimeZone;
    public AdsenseAccountsReportsGenerateQueryParams withReportingTimeZone(AdsenseAccountsReportsGenerateReportingTimeZoneEnum reportingTimeZone) {
        this.reportingTimeZone = reportingTimeZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.day")
    public Long startDateDay;
    public AdsenseAccountsReportsGenerateQueryParams withStartDateDay(Long startDateDay) {
        this.startDateDay = startDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.month")
    public Long startDateMonth;
    public AdsenseAccountsReportsGenerateQueryParams withStartDateMonth(Long startDateMonth) {
        this.startDateMonth = startDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.year")
    public Long startDateYear;
    public AdsenseAccountsReportsGenerateQueryParams withStartDateYear(Long startDateYear) {
        this.startDateYear = startDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public AdsenseAccountsReportsGenerateQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public AdsenseAccountsReportsGenerateQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
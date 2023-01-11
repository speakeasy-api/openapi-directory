package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsSavedGenerateCsvQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currencyCode")
    public String currencyCode;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateRange")
    public AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum dateRange;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withDateRange(AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.day")
    public Long endDateDay;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withEndDateDay(Long endDateDay) {
        this.endDateDay = endDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.month")
    public Long endDateMonth;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withEndDateMonth(Long endDateMonth) {
        this.endDateMonth = endDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate.year")
    public Long endDateYear;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withEndDateYear(Long endDateYear) {
        this.endDateYear = endDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportingTimeZone")
    public AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum reportingTimeZone;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withReportingTimeZone(AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum reportingTimeZone) {
        this.reportingTimeZone = reportingTimeZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.day")
    public Long startDateDay;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withStartDateDay(Long startDateDay) {
        this.startDateDay = startDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.month")
    public Long startDateMonth;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withStartDateMonth(Long startDateMonth) {
        this.startDateMonth = startDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate.year")
    public Long startDateYear;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withStartDateYear(Long startDateYear) {
        this.startDateYear = startDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public AdsenseAccountsReportsSavedGenerateCsvQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
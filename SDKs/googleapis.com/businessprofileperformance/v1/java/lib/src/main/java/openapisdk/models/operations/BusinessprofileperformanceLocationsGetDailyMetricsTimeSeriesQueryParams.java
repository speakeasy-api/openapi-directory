package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyMetric")
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum dailyMetric;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailyMetric(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum dailyMetric) {
        this.dailyMetric = dailyMetric;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyRange.endDate.day")
    public Long dailyRangeEndDateDay;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailyRangeEndDateDay(Long dailyRangeEndDateDay) {
        this.dailyRangeEndDateDay = dailyRangeEndDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyRange.endDate.month")
    public Long dailyRangeEndDateMonth;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailyRangeEndDateMonth(Long dailyRangeEndDateMonth) {
        this.dailyRangeEndDateMonth = dailyRangeEndDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyRange.endDate.year")
    public Long dailyRangeEndDateYear;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailyRangeEndDateYear(Long dailyRangeEndDateYear) {
        this.dailyRangeEndDateYear = dailyRangeEndDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyRange.startDate.day")
    public Long dailyRangeStartDateDay;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailyRangeStartDateDay(Long dailyRangeStartDateDay) {
        this.dailyRangeStartDateDay = dailyRangeStartDateDay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyRange.startDate.month")
    public Long dailyRangeStartDateMonth;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailyRangeStartDateMonth(Long dailyRangeStartDateMonth) {
        this.dailyRangeStartDateMonth = dailyRangeStartDateMonth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyRange.startDate.year")
    public Long dailyRangeStartDateYear;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailyRangeStartDateYear(Long dailyRangeStartDateYear) {
        this.dailyRangeStartDateYear = dailyRangeStartDateYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailySubEntityType.dayOfWeek")
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum dailySubEntityTypeDayOfWeek;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailySubEntityTypeDayOfWeek(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum dailySubEntityTypeDayOfWeek) {
        this.dailySubEntityTypeDayOfWeek = dailySubEntityTypeDayOfWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailySubEntityType.timeOfDay.hours")
    public Long dailySubEntityTypeTimeOfDayHours;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailySubEntityTypeTimeOfDayHours(Long dailySubEntityTypeTimeOfDayHours) {
        this.dailySubEntityTypeTimeOfDayHours = dailySubEntityTypeTimeOfDayHours;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailySubEntityType.timeOfDay.minutes")
    public Long dailySubEntityTypeTimeOfDayMinutes;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailySubEntityTypeTimeOfDayMinutes(Long dailySubEntityTypeTimeOfDayMinutes) {
        this.dailySubEntityTypeTimeOfDayMinutes = dailySubEntityTypeTimeOfDayMinutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailySubEntityType.timeOfDay.nanos")
    public Long dailySubEntityTypeTimeOfDayNanos;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailySubEntityTypeTimeOfDayNanos(Long dailySubEntityTypeTimeOfDayNanos) {
        this.dailySubEntityTypeTimeOfDayNanos = dailySubEntityTypeTimeOfDayNanos;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailySubEntityType.timeOfDay.seconds")
    public Long dailySubEntityTypeTimeOfDaySeconds;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withDailySubEntityTypeTimeOfDaySeconds(Long dailySubEntityTypeTimeOfDaySeconds) {
        this.dailySubEntityTypeTimeOfDaySeconds = dailySubEntityTypeTimeOfDaySeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsDataGaGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AnalyticsDataGaGetQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dimensions")
    public String dimensions;
    public AnalyticsDataGaGetQueryParams withDimensions(String dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end-date")
    public String endDate;
    public AnalyticsDataGaGetQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AnalyticsDataGaGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filters")
    public String filters;
    public AnalyticsDataGaGetQueryParams withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public AnalyticsDataGaGetQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include-empty-rows")
    public Boolean includeEmptyRows;
    public AnalyticsDataGaGetQueryParams withIncludeEmptyRows(Boolean includeEmptyRows) {
        this.includeEmptyRows = includeEmptyRows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AnalyticsDataGaGetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max-results")
    public Long maxResults;
    public AnalyticsDataGaGetQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public String metrics;
    public AnalyticsDataGaGetQueryParams withMetrics(String metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AnalyticsDataGaGetQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=output")
    public AnalyticsDataGaGetOutputEnum output;
    public AnalyticsDataGaGetQueryParams withOutput(AnalyticsDataGaGetOutputEnum output) {
        this.output = output;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AnalyticsDataGaGetQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AnalyticsDataGaGetQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=samplingLevel")
    public AnalyticsDataGaGetSamplingLevelEnum samplingLevel;
    public AnalyticsDataGaGetQueryParams withSamplingLevel(AnalyticsDataGaGetSamplingLevelEnum samplingLevel) {
        this.samplingLevel = samplingLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segment")
    public String segment;
    public AnalyticsDataGaGetQueryParams withSegment(String segment) {
        this.segment = segment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public AnalyticsDataGaGetQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start-date")
    public String startDate;
    public AnalyticsDataGaGetQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start-index")
    public Long startIndex;
    public AnalyticsDataGaGetQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public AnalyticsDataGaGetQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
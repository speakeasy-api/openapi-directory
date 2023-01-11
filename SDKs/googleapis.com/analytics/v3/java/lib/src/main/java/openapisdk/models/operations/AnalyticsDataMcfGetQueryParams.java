package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsDataMcfGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public AnalyticsDataMcfGetQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dimensions")
    public String dimensions;
    public AnalyticsDataMcfGetQueryParams withDimensions(String dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end-date")
    public String endDate;
    public AnalyticsDataMcfGetQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AnalyticsDataMcfGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filters")
    public String filters;
    public AnalyticsDataMcfGetQueryParams withFilters(String filters) {
        this.filters = filters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public AnalyticsDataMcfGetQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public AnalyticsDataMcfGetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max-results")
    public Long maxResults;
    public AnalyticsDataMcfGetQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public String metrics;
    public AnalyticsDataMcfGetQueryParams withMetrics(String metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public AnalyticsDataMcfGetQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public AnalyticsDataMcfGetQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public AnalyticsDataMcfGetQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=samplingLevel")
    public AnalyticsDataMcfGetSamplingLevelEnum samplingLevel;
    public AnalyticsDataMcfGetQueryParams withSamplingLevel(AnalyticsDataMcfGetSamplingLevelEnum samplingLevel) {
        this.samplingLevel = samplingLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public AnalyticsDataMcfGetQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start-date")
    public String startDate;
    public AnalyticsDataMcfGetQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start-index")
    public Long startIndex;
    public AnalyticsDataMcfGetQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public AnalyticsDataMcfGetQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}
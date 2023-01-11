package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsTimeSeriesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public MonitoringProjectsTimeSeriesListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public MonitoringProjectsTimeSeriesListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aggregation.alignmentPeriod")
    public String aggregationAlignmentPeriod;
    public MonitoringProjectsTimeSeriesListQueryParams withAggregationAlignmentPeriod(String aggregationAlignmentPeriod) {
        this.aggregationAlignmentPeriod = aggregationAlignmentPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aggregation.crossSeriesReducer")
    public MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum aggregationCrossSeriesReducer;
    public MonitoringProjectsTimeSeriesListQueryParams withAggregationCrossSeriesReducer(MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum aggregationCrossSeriesReducer) {
        this.aggregationCrossSeriesReducer = aggregationCrossSeriesReducer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aggregation.groupByFields")
    public String[] aggregationGroupByFields;
    public MonitoringProjectsTimeSeriesListQueryParams withAggregationGroupByFields(String[] aggregationGroupByFields) {
        this.aggregationGroupByFields = aggregationGroupByFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aggregation.perSeriesAligner")
    public MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum aggregationPerSeriesAligner;
    public MonitoringProjectsTimeSeriesListQueryParams withAggregationPerSeriesAligner(MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum aggregationPerSeriesAligner) {
        this.aggregationPerSeriesAligner = aggregationPerSeriesAligner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public MonitoringProjectsTimeSeriesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public MonitoringProjectsTimeSeriesListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public MonitoringProjectsTimeSeriesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public MonitoringProjectsTimeSeriesListQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval.endTime")
    public String intervalEndTime;
    public MonitoringProjectsTimeSeriesListQueryParams withIntervalEndTime(String intervalEndTime) {
        this.intervalEndTime = intervalEndTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval.startTime")
    public String intervalStartTime;
    public MonitoringProjectsTimeSeriesListQueryParams withIntervalStartTime(String intervalStartTime) {
        this.intervalStartTime = intervalStartTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public MonitoringProjectsTimeSeriesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public MonitoringProjectsTimeSeriesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public String orderBy;
    public MonitoringProjectsTimeSeriesListQueryParams withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public MonitoringProjectsTimeSeriesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public MonitoringProjectsTimeSeriesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public MonitoringProjectsTimeSeriesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public MonitoringProjectsTimeSeriesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secondaryAggregation.alignmentPeriod")
    public String secondaryAggregationAlignmentPeriod;
    public MonitoringProjectsTimeSeriesListQueryParams withSecondaryAggregationAlignmentPeriod(String secondaryAggregationAlignmentPeriod) {
        this.secondaryAggregationAlignmentPeriod = secondaryAggregationAlignmentPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secondaryAggregation.crossSeriesReducer")
    public MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum secondaryAggregationCrossSeriesReducer;
    public MonitoringProjectsTimeSeriesListQueryParams withSecondaryAggregationCrossSeriesReducer(MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum secondaryAggregationCrossSeriesReducer) {
        this.secondaryAggregationCrossSeriesReducer = secondaryAggregationCrossSeriesReducer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secondaryAggregation.groupByFields")
    public String[] secondaryAggregationGroupByFields;
    public MonitoringProjectsTimeSeriesListQueryParams withSecondaryAggregationGroupByFields(String[] secondaryAggregationGroupByFields) {
        this.secondaryAggregationGroupByFields = secondaryAggregationGroupByFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secondaryAggregation.perSeriesAligner")
    public MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum secondaryAggregationPerSeriesAligner;
    public MonitoringProjectsTimeSeriesListQueryParams withSecondaryAggregationPerSeriesAligner(MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum secondaryAggregationPerSeriesAligner) {
        this.secondaryAggregationPerSeriesAligner = secondaryAggregationPerSeriesAligner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public MonitoringProjectsTimeSeriesListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public MonitoringProjectsTimeSeriesListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public MonitoringProjectsTimeSeriesListViewEnum view;
    public MonitoringProjectsTimeSeriesListQueryParams withView(MonitoringProjectsTimeSeriesListViewEnum view) {
        this.view = view;
        return this;
    }
}
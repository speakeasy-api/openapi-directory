import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringProjectsTimeSeriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsTimeSeriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsTimeSeriesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsTimeSeriesListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsTimeSeriesListSecurityOption1;
    option2?: MonitoringProjectsTimeSeriesListSecurityOption2;
    option3?: MonitoringProjectsTimeSeriesListSecurityOption3;
}
/**
 * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
 */
export declare enum MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum {
    ReduceNone = "REDUCE_NONE",
    ReduceMean = "REDUCE_MEAN",
    ReduceMin = "REDUCE_MIN",
    ReduceMax = "REDUCE_MAX",
    ReduceSum = "REDUCE_SUM",
    ReduceStddev = "REDUCE_STDDEV",
    ReduceCount = "REDUCE_COUNT",
    ReduceCountTrue = "REDUCE_COUNT_TRUE",
    ReduceCountFalse = "REDUCE_COUNT_FALSE",
    ReduceFractionTrue = "REDUCE_FRACTION_TRUE",
    ReducePercentile99 = "REDUCE_PERCENTILE_99",
    ReducePercentile95 = "REDUCE_PERCENTILE_95",
    ReducePercentile50 = "REDUCE_PERCENTILE_50",
    ReducePercentile05 = "REDUCE_PERCENTILE_05"
}
/**
 * An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
 */
export declare enum MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum {
    AlignNone = "ALIGN_NONE",
    AlignDelta = "ALIGN_DELTA",
    AlignRate = "ALIGN_RATE",
    AlignInterpolate = "ALIGN_INTERPOLATE",
    AlignNextOlder = "ALIGN_NEXT_OLDER",
    AlignMin = "ALIGN_MIN",
    AlignMax = "ALIGN_MAX",
    AlignMean = "ALIGN_MEAN",
    AlignCount = "ALIGN_COUNT",
    AlignSum = "ALIGN_SUM",
    AlignStddev = "ALIGN_STDDEV",
    AlignCountTrue = "ALIGN_COUNT_TRUE",
    AlignCountFalse = "ALIGN_COUNT_FALSE",
    AlignFractionTrue = "ALIGN_FRACTION_TRUE",
    AlignPercentile99 = "ALIGN_PERCENTILE_99",
    AlignPercentile95 = "ALIGN_PERCENTILE_95",
    AlignPercentile50 = "ALIGN_PERCENTILE_50",
    AlignPercentile05 = "ALIGN_PERCENTILE_05",
    AlignPercentChange = "ALIGN_PERCENT_CHANGE"
}
/**
 * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
 */
export declare enum MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum {
    ReduceNone = "REDUCE_NONE",
    ReduceMean = "REDUCE_MEAN",
    ReduceMin = "REDUCE_MIN",
    ReduceMax = "REDUCE_MAX",
    ReduceSum = "REDUCE_SUM",
    ReduceStddev = "REDUCE_STDDEV",
    ReduceCount = "REDUCE_COUNT",
    ReduceCountTrue = "REDUCE_COUNT_TRUE",
    ReduceCountFalse = "REDUCE_COUNT_FALSE",
    ReduceFractionTrue = "REDUCE_FRACTION_TRUE",
    ReducePercentile99 = "REDUCE_PERCENTILE_99",
    ReducePercentile95 = "REDUCE_PERCENTILE_95",
    ReducePercentile50 = "REDUCE_PERCENTILE_50",
    ReducePercentile05 = "REDUCE_PERCENTILE_05"
}
/**
 * An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
 */
export declare enum MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum {
    AlignNone = "ALIGN_NONE",
    AlignDelta = "ALIGN_DELTA",
    AlignRate = "ALIGN_RATE",
    AlignInterpolate = "ALIGN_INTERPOLATE",
    AlignNextOlder = "ALIGN_NEXT_OLDER",
    AlignMin = "ALIGN_MIN",
    AlignMax = "ALIGN_MAX",
    AlignMean = "ALIGN_MEAN",
    AlignCount = "ALIGN_COUNT",
    AlignSum = "ALIGN_SUM",
    AlignStddev = "ALIGN_STDDEV",
    AlignCountTrue = "ALIGN_COUNT_TRUE",
    AlignCountFalse = "ALIGN_COUNT_FALSE",
    AlignFractionTrue = "ALIGN_FRACTION_TRUE",
    AlignPercentile99 = "ALIGN_PERCENTILE_99",
    AlignPercentile95 = "ALIGN_PERCENTILE_95",
    AlignPercentile50 = "ALIGN_PERCENTILE_50",
    AlignPercentile05 = "ALIGN_PERCENTILE_05",
    AlignPercentChange = "ALIGN_PERCENT_CHANGE"
}
/**
 * Required. Specifies which information is returned about the time series.
 */
export declare enum MonitoringProjectsTimeSeriesListViewEnum {
    Full = "FULL",
    Headers = "HEADERS"
}
export declare class MonitoringProjectsTimeSeriesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     */
    aggregationAlignmentPeriod?: string;
    /**
     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     */
    aggregationCrossSeriesReducer?: MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum;
    /**
     * The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     */
    aggregationGroupByFields?: string[];
    /**
     * An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     */
    aggregationPerSeriesAligner?: MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name"
     */
    filter?: string;
    /**
     * Required. The end of the time interval.
     */
    intervalEndTime?: string;
    /**
     * Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     */
    intervalStartTime?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID]
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest).
     */
    orderBy?: string;
    /**
     * A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
     */
    secondaryAggregationAlignmentPeriod?: string;
    /**
     * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
     */
    secondaryAggregationCrossSeriesReducer?: MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum;
    /**
     * The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
     */
    secondaryAggregationGroupByFields?: string[];
    /**
     * An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
     */
    secondaryAggregationPerSeriesAligner?: MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Required. Specifies which information is returned about the time series.
     */
    view?: MonitoringProjectsTimeSeriesListViewEnum;
}
export declare class MonitoringProjectsTimeSeriesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listTimeSeriesResponse?: shared.ListTimeSeriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest {
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams pathParams;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest withPathParams(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams queryParams;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest withQueryParams(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest request;
    public PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest withRequest(openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest request) {
        this.request = request;
        return this;
    }
}
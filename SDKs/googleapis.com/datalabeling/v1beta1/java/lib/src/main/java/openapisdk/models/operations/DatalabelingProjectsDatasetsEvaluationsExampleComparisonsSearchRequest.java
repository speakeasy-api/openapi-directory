package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest {
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchPathParams pathParams;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest withPathParams(DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchQueryParams queryParams;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest withQueryParams(DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest request;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest withRequest(openapisdk.models.shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest request) {
        this.request = request;
        return this;
    }
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity security;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest withSecurity(DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity security) {
        this.security = security;
        return this;
    }
}
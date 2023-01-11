package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChromeuxreportRecordsQueryRecordRequest {
    public ChromeuxreportRecordsQueryRecordQueryParams queryParams;
    public ChromeuxreportRecordsQueryRecordRequest withQueryParams(ChromeuxreportRecordsQueryRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryRequest request;
    public ChromeuxreportRecordsQueryRecordRequest withRequest(openapisdk.models.shared.QueryRequest request) {
        this.request = request;
        return this;
    }
}
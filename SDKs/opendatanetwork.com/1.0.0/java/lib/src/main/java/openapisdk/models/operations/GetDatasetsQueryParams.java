package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatasetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_token")
    public String appToken;
    public GetDatasetsQueryParams withAppToken(String appToken) {
        this.appToken = appToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dataset_id")
    public String datasetId;
    public GetDatasetsQueryParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity_id")
    public String entityId;
    public GetDatasetsQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Double limit;
    public GetDatasetsQueryParams withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Double offset;
    public GetDatasetsQueryParams withOffset(Double offset) {
        this.offset = offset;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest {
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams pathParams;
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest withPathParams(NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest withQueryParams(NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateInstanceMetadataItemsRequest request;
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest withRequest(openapisdk.models.shared.UpdateInstanceMetadataItemsRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity security;
    public NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest withSecurity(NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity security) {
        this.security = security;
        return this;
    }
}
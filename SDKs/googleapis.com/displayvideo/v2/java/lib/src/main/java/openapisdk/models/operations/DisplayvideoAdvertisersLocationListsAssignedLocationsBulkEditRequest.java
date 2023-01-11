package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest {
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditPathParams pathParams;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest withPathParams(DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditQueryParams queryParams;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest withQueryParams(DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditAssignedLocationsRequestInput request;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest withRequest(openapisdk.models.shared.BulkEditAssignedLocationsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity security;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest withSecurity(DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity security) {
        this.security = security;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataCategoryRequest {
    public PutCoursesContentIdMetadataCategoryPathParams pathParams;
    public PutCoursesContentIdMetadataCategoryRequest withPathParams(PutCoursesContentIdMetadataCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutCoursesContentIdMetadataCategoryRequestBody request;
    public PutCoursesContentIdMetadataCategoryRequest withRequest(PutCoursesContentIdMetadataCategoryRequestBody request) {
        this.request = request;
        return this;
    }
}
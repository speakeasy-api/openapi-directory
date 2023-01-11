package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataTagsRequest {
    public PutCoursesContentIdMetadataTagsPathParams pathParams;
    public PutCoursesContentIdMetadataTagsRequest withPathParams(PutCoursesContentIdMetadataTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutCoursesContentIdMetadataTagsRequestBody request;
    public PutCoursesContentIdMetadataTagsRequest withRequest(PutCoursesContentIdMetadataTagsRequestBody request) {
        this.request = request;
        return this;
    }
}
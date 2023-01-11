package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataLevelRequest {
    public PutCoursesContentIdMetadataLevelPathParams pathParams;
    public PutCoursesContentIdMetadataLevelRequest withPathParams(PutCoursesContentIdMetadataLevelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutCoursesContentIdMetadataLevelRequestBody request;
    public PutCoursesContentIdMetadataLevelRequest withRequest(PutCoursesContentIdMetadataLevelRequestBody request) {
        this.request = request;
        return this;
    }
}
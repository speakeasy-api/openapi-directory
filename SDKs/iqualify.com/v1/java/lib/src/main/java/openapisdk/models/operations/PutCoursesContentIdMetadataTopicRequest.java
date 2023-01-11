package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataTopicRequest {
    public PutCoursesContentIdMetadataTopicPathParams pathParams;
    public PutCoursesContentIdMetadataTopicRequest withPathParams(PutCoursesContentIdMetadataTopicPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutCoursesContentIdMetadataTopicRequestBody request;
    public PutCoursesContentIdMetadataTopicRequest withRequest(PutCoursesContentIdMetadataTopicRequestBody request) {
        this.request = request;
        return this;
    }
}
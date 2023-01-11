package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGeomarksNewRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PostGeomarksNewRequestBody request;
    public PostGeomarksNewRequest withRequest(PostGeomarksNewRequestBody request) {
        this.request = request;
        return this;
    }
}
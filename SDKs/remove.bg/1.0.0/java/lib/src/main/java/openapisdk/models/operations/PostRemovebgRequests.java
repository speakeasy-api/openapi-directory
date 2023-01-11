package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemovebgRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveBgJson removeBgJson;
    public PostRemovebgRequests withRemoveBgJson(openapisdk.models.shared.RemoveBgJson removeBgJson) {
        this.removeBgJson = removeBgJson;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.RemoveBgJson removeBgJson1;
    public PostRemovebgRequests withRemoveBgJson1(openapisdk.models.shared.RemoveBgJson removeBgJson1) {
        this.removeBgJson1 = removeBgJson1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.RemoveBgMultipart removeBgMultipart;
    public PostRemovebgRequests withRemoveBgMultipart(openapisdk.models.shared.RemoveBgMultipart removeBgMultipart) {
        this.removeBgMultipart = removeBgMultipart;
        return this;
    }
}
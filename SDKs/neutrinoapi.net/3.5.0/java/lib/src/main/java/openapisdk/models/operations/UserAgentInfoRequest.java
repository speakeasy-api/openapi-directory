package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserAgentInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UserAgentInfoRequestBody request;
    public UserAgentInfoRequest withRequest(UserAgentInfoRequestBody request) {
        this.request = request;
        return this;
    }
}
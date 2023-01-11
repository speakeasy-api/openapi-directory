package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBucketPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RateLimitSid")
    public String rateLimitSid;
    public CreateBucketPathParams withRateLimitSid(String rateLimitSid) {
        this.rateLimitSid = rateLimitSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateBucketPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}
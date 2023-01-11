package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBucketPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RateLimitSid")
    public String rateLimitSid;
    public UpdateBucketPathParams withRateLimitSid(String rateLimitSid) {
        this.rateLimitSid = rateLimitSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public UpdateBucketPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateBucketPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
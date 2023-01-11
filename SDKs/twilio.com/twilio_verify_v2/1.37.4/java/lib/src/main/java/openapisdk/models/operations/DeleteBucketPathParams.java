package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBucketPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RateLimitSid")
    public String rateLimitSid;
    public DeleteBucketPathParams withRateLimitSid(String rateLimitSid) {
        this.rateLimitSid = rateLimitSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteBucketPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteBucketPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
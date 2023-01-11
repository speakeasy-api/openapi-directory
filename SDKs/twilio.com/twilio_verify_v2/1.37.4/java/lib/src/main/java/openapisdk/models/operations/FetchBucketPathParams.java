package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchBucketPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RateLimitSid")
    public String rateLimitSid;
    public FetchBucketPathParams withRateLimitSid(String rateLimitSid) {
        this.rateLimitSid = rateLimitSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchBucketPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchBucketPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}
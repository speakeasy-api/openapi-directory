package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobSid")
    public String jobSid;
    public FetchJobPathParams withJobSid(String jobSid) {
        this.jobSid = jobSid;
        return this;
    }
}
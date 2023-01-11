package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobSid")
    public String jobSid;
    public DeleteJobPathParams withJobSid(String jobSid) {
        this.jobSid = jobSid;
        return this;
    }
}
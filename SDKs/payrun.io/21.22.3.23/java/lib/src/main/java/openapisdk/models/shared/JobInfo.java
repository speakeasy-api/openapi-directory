package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobInfo")
    public JobInfoJobInfo jobInfo;
    public JobInfo withJobInfo(JobInfoJobInfo jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
}
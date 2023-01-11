package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobEvent
 * An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
**/
public class JobEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public String[] jobs;
    public JobEvent withJobs(String[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public JobEventTypeEnum type;
    public JobEvent withType(JobEventTypeEnum type) {
        this.type = type;
        return this;
    }
}
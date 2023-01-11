package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataprocParameters
 * Parameters used in Dataproc JobType executions.
**/
public class DataprocParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public DataprocParameters withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
}
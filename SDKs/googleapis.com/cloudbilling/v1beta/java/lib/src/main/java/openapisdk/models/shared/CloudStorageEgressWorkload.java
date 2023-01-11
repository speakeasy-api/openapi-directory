package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudStorageEgressWorkload
 * Specification of a network type. Network egress within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network egress within Google Cloud and the general network usage.
**/
public class CloudStorageEgressWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationContinent")
    public CloudStorageEgressWorkloadDestinationContinentEnum destinationContinent;
    public CloudStorageEgressWorkload withDestinationContinent(CloudStorageEgressWorkloadDestinationContinentEnum destinationContinent) {
        this.destinationContinent = destinationContinent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressRate")
    public Usage egressRate;
    public CloudStorageEgressWorkload withEgressRate(Usage egressRate) {
        this.egressRate = egressRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceContinent")
    public CloudStorageEgressWorkloadSourceContinentEnum sourceContinent;
    public CloudStorageEgressWorkload withSourceContinent(CloudStorageEgressWorkloadSourceContinentEnum sourceContinent) {
        this.sourceContinent = sourceContinent;
        return this;
    }
}
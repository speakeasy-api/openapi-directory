package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcsObject
 * Google Cloud Storage object representation.
**/
public class GcsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public GcsObject withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generationNumber")
    public String generationNumber;
    public GcsObject withGenerationNumber(String generationNumber) {
        this.generationNumber = generationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public GcsObject withObject(String object) {
        this.object = object;
        return this;
    }
}
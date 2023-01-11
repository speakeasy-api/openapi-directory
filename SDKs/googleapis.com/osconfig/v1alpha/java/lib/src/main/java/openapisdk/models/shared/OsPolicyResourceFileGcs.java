package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceFileGcs
 * Specifies a file available as a Cloud Storage Object.
**/
public class OsPolicyResourceFileGcs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public OsPolicyResourceFileGcs withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public OsPolicyResourceFileGcs withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public OsPolicyResourceFileGcs withObject(String object) {
        this.object = object;
        return this;
    }
}
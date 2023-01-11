package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MemoryHashSignature
 * A signature corresponding to memory page hashes.
**/
public class MemoryHashSignature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryFamily")
    public String binaryFamily;
    public MemoryHashSignature withBinaryFamily(String binaryFamily) {
        this.binaryFamily = binaryFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detections")
    public Detection[] detections;
    public MemoryHashSignature withDetections(Detection[] detections) {
        this.detections = detections;
        return this;
    }
}
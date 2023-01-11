package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataObjectId
 * gdata
**/
public class GdataObjectId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketName")
    public String bucketName;
    public GdataObjectId withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public GdataObjectId withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public GdataObjectId withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
}
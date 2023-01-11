package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IsochroneResponsePolygonProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public Integer bucket;
    public IsochroneResponsePolygonProperties withBucket(Integer bucket) {
        this.bucket = bucket;
        return this;
    }
}
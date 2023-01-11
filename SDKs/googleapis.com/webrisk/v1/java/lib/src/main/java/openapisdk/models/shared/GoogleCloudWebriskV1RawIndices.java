package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1RawIndices
 * A set of raw indices to remove from a local list.
**/
public class GoogleCloudWebriskV1RawIndices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indices")
    public Integer[] indices;
    public GoogleCloudWebriskV1RawIndices withIndices(Integer[] indices) {
        this.indices = indices;
        return this;
    }
}
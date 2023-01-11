package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaListLimits
 * Limits for list-variant of a Field type.
**/
public class GoogleAppsDriveLabelsV2betaListLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEntries")
    public Integer maxEntries;
    public GoogleAppsDriveLabelsV2betaListLimits withMaxEntries(Integer maxEntries) {
        this.maxEntries = maxEntries;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldListOptions
 * Options for a multi-valued variant of an associated field type.
**/
public class GoogleAppsDriveLabelsV2betaFieldListOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEntries")
    public Integer maxEntries;
    public GoogleAppsDriveLabelsV2betaFieldListOptions withMaxEntries(Integer maxEntries) {
        this.maxEntries = maxEntries;
        return this;
    }
}
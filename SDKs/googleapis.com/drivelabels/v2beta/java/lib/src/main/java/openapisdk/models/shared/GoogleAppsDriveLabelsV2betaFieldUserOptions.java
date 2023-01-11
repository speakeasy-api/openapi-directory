package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldUserOptions
 * Options for the user field type.
**/
public class GoogleAppsDriveLabelsV2betaFieldUserOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listOptions")
    public GoogleAppsDriveLabelsV2betaFieldListOptions listOptions;
    public GoogleAppsDriveLabelsV2betaFieldUserOptions withListOptions(GoogleAppsDriveLabelsV2betaFieldListOptions listOptions) {
        this.listOptions = listOptions;
        return this;
    }
}
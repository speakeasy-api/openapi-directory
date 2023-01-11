package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldUserOptions
 * Options for the user field type.
**/
public class GoogleAppsDriveLabelsV2FieldUserOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listOptions")
    public GoogleAppsDriveLabelsV2FieldListOptions listOptions;
    public GoogleAppsDriveLabelsV2FieldUserOptions withListOptions(GoogleAppsDriveLabelsV2FieldListOptions listOptions) {
        this.listOptions = listOptions;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaUserLimits
 * Limits for Field.Type.USER.
**/
public class GoogleAppsDriveLabelsV2betaUserLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listLimits")
    public GoogleAppsDriveLabelsV2betaListLimits listLimits;
    public GoogleAppsDriveLabelsV2betaUserLimits withListLimits(GoogleAppsDriveLabelsV2betaListLimits listLimits) {
        this.listLimits = listLimits;
        return this;
    }
}
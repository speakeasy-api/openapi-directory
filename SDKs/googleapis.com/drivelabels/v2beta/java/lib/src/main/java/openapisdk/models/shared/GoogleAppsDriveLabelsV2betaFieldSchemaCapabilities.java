package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities
 * The capabilities related to this field when editing the field.
**/
public class GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDisable")
    public Boolean canDisable;
    public GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities withCanDisable(Boolean canDisable) {
        this.canDisable = canDisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEnable")
    public Boolean canEnable;
    public GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities withCanEnable(Boolean canEnable) {
        this.canEnable = canEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdate")
    public Boolean canUpdate;
    public GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities withCanUpdate(Boolean canUpdate) {
        this.canUpdate = canUpdate;
        return this;
    }
}
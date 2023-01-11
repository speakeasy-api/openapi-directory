package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2LabelSchemaCapabilities
 * The capabilities related to this label when editing the label.
**/
public class GoogleAppsDriveLabelsV2LabelSchemaCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public GoogleAppsDriveLabelsV2LabelSchemaCapabilities withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDisable")
    public Boolean canDisable;
    public GoogleAppsDriveLabelsV2LabelSchemaCapabilities withCanDisable(Boolean canDisable) {
        this.canDisable = canDisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEnable")
    public Boolean canEnable;
    public GoogleAppsDriveLabelsV2LabelSchemaCapabilities withCanEnable(Boolean canEnable) {
        this.canEnable = canEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdate")
    public Boolean canUpdate;
    public GoogleAppsDriveLabelsV2LabelSchemaCapabilities withCanUpdate(Boolean canUpdate) {
        this.canUpdate = canUpdate;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities
 * The capabilities related to this label when editing the label.
**/
public class GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDisable")
    public Boolean canDisable;
    public GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities withCanDisable(Boolean canDisable) {
        this.canDisable = canDisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEnable")
    public Boolean canEnable;
    public GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities withCanEnable(Boolean canEnable) {
        this.canEnable = canEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdate")
    public Boolean canUpdate;
    public GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities withCanUpdate(Boolean canUpdate) {
        this.canUpdate = canUpdate;
        return this;
    }
}
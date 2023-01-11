package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities
 * The capabilities related to this choice when editing the choice.
**/
public class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDisable")
    public Boolean canDisable;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities withCanDisable(Boolean canDisable) {
        this.canDisable = canDisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEnable")
    public Boolean canEnable;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities withCanEnable(Boolean canEnable) {
        this.canEnable = canEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdate")
    public Boolean canUpdate;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities withCanUpdate(Boolean canUpdate) {
        this.canUpdate = canUpdate;
        return this;
    }
}
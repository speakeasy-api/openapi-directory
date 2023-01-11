package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities
 * The capabilities related to this choice when editing the choice.
**/
public class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDisable")
    public Boolean canDisable;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities withCanDisable(Boolean canDisable) {
        this.canDisable = canDisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEnable")
    public Boolean canEnable;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities withCanEnable(Boolean canEnable) {
        this.canEnable = canEnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdate")
    public Boolean canUpdate;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities withCanUpdate(Boolean canUpdate) {
        this.canUpdate = canUpdate;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties
 * Basic properties of the choice.
**/
public class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeConfig")
    public GoogleAppsDriveLabelsV2BadgeConfig badgeConfig;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties withBadgeConfig(GoogleAppsDriveLabelsV2BadgeConfig badgeConfig) {
        this.badgeConfig = badgeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertBeforeChoice")
    public String insertBeforeChoice;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties withInsertBeforeChoice(String insertBeforeChoice) {
        this.insertBeforeChoice = insertBeforeChoice;
        return this;
    }
}
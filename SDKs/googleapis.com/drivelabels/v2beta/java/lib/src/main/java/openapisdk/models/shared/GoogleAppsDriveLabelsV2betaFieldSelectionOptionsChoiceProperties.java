package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties
 * Basic properties of the choice.
**/
public class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeConfig")
    public GoogleAppsDriveLabelsV2betaBadgeConfig badgeConfig;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties withBadgeConfig(GoogleAppsDriveLabelsV2betaBadgeConfig badgeConfig) {
        this.badgeConfig = badgeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertBeforeChoice")
    public String insertBeforeChoice;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties withInsertBeforeChoice(String insertBeforeChoice) {
        this.insertBeforeChoice = insertBeforeChoice;
        return this;
    }
}
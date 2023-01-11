package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaSelectionLimits
 * Limits for selection Field type.
**/
public class GoogleAppsDriveLabelsV2betaSelectionLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listLimits")
    public GoogleAppsDriveLabelsV2betaListLimits listLimits;
    public GoogleAppsDriveLabelsV2betaSelectionLimits withListLimits(GoogleAppsDriveLabelsV2betaListLimits listLimits) {
        this.listLimits = listLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxChoices")
    public Integer maxChoices;
    public GoogleAppsDriveLabelsV2betaSelectionLimits withMaxChoices(Integer maxChoices) {
        this.maxChoices = maxChoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDeletedChoices")
    public Integer maxDeletedChoices;
    public GoogleAppsDriveLabelsV2betaSelectionLimits withMaxDeletedChoices(Integer maxDeletedChoices) {
        this.maxDeletedChoices = maxDeletedChoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDisplayNameLength")
    public Integer maxDisplayNameLength;
    public GoogleAppsDriveLabelsV2betaSelectionLimits withMaxDisplayNameLength(Integer maxDisplayNameLength) {
        this.maxDisplayNameLength = maxDisplayNameLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxIdLength")
    public Integer maxIdLength;
    public GoogleAppsDriveLabelsV2betaSelectionLimits withMaxIdLength(Integer maxIdLength) {
        this.maxIdLength = maxIdLength;
        return this;
    }
}
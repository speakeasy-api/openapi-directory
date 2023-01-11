package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2SensitivityScore
 * Score is a summary of all elements in the data profile. A higher number means more sensitive.
**/
public class GooglePrivacyDlpV2SensitivityScore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public GooglePrivacyDlpV2SensitivityScoreScoreEnum score;
    public GooglePrivacyDlpV2SensitivityScore withScore(GooglePrivacyDlpV2SensitivityScoreScoreEnum score) {
        this.score = score;
        return this;
    }
}
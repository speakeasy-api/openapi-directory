package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpellingCorrection
 * Output only. Spell check result.
**/
public class SpellingCorrection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corrected")
    public Boolean corrected;
    public SpellingCorrection withCorrected(Boolean corrected) {
        this.corrected = corrected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correctedText")
    public String correctedText;
    public SpellingCorrection withCorrectedText(String correctedText) {
        this.correctedText = correctedText;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Voice
 * Description of a voice supported by the TTS service.
**/
public class Voice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCodes")
    public String[] languageCodes;
    public Voice withLanguageCodes(String[] languageCodes) {
        this.languageCodes = languageCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Voice withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("naturalSampleRateHertz")
    public Integer naturalSampleRateHertz;
    public Voice withNaturalSampleRateHertz(Integer naturalSampleRateHertz) {
        this.naturalSampleRateHertz = naturalSampleRateHertz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssmlGender")
    public VoiceSsmlGenderEnum ssmlGender;
    public Voice withSsmlGender(VoiceSsmlGenderEnum ssmlGender) {
        this.ssmlGender = ssmlGender;
        return this;
    }
}
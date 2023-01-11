package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoiceSelectionParams
 * Description of which voice to use for a synthesis request.
**/
public class VoiceSelectionParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customVoice")
    public CustomVoiceParams customVoice;
    public VoiceSelectionParams withCustomVoice(CustomVoiceParams customVoice) {
        this.customVoice = customVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public VoiceSelectionParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VoiceSelectionParams withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssmlGender")
    public VoiceSelectionParamsSsmlGenderEnum ssmlGender;
    public VoiceSelectionParams withSsmlGender(VoiceSelectionParamsSsmlGenderEnum ssmlGender) {
        this.ssmlGender = ssmlGender;
        return this;
    }
}
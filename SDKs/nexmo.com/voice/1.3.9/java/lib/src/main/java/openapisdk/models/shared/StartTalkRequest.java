package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTalkRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public LanguageEnum language;
    public StartTalkRequest withLanguage(LanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public StartTalkRequest withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loop")
    public Long loop;
    public StartTalkRequest withLoop(Long loop) {
        this.loop = loop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("style")
    public Long style;
    public StartTalkRequest withStyle(Long style) {
        this.style = style;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public StartTalkRequest withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_name")
    public VoiceNameEnum voiceName;
    public StartTalkRequest withVoiceName(VoiceNameEnum voiceName) {
        this.voiceName = voiceName;
        return this;
    }
}
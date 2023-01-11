package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContinuousProjectLanguage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ContinuousProjectLanguage withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_enabled")
    public Boolean isEnabled;
    public ContinuousProjectLanguage withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
}
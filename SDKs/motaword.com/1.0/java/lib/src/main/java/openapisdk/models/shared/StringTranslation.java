package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StringTranslation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public StringTranslation withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public StringTranslation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StringTranslationStateEnum state;
    public StringTranslation withState(StringTranslationStateEnum state) {
        this.state = state;
        return this;
    }
}
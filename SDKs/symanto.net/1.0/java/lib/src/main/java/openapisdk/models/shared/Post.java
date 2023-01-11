package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Post {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Post withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public Post withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public Post withText(String text) {
        this.text = text;
        return this;
    }
}
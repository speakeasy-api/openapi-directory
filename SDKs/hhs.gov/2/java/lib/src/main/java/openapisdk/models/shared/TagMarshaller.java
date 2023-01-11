package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagMarshaller {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TagMarshaller withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public TagLanguageMarshaller language;
    public TagMarshaller withLanguage(TagLanguageMarshaller language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagMarshaller withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TagTypeMarshaller type;
    public TagMarshaller withType(TagTypeMarshaller type) {
        this.type = type;
        return this;
    }
}
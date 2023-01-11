package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonPropertiesWinePairing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateADatabase200ApplicationJsonPropertiesWinePairing withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateADatabase200ApplicationJsonPropertiesWinePairing withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rich_text")
    public java.util.Map<String, Object> richText;
    public UpdateADatabase200ApplicationJsonPropertiesWinePairing withRichText(java.util.Map<String, Object> richText) {
        this.richText = richText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateADatabase200ApplicationJsonPropertiesWinePairing withType(String type) {
        this.type = type;
        return this;
    }
}
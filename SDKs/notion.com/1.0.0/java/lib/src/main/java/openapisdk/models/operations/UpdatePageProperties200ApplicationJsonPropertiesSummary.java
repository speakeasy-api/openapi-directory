package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePageProperties200ApplicationJsonPropertiesSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rich_text")
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText[] richText;
    public UpdatePageProperties200ApplicationJsonPropertiesSummary withRichText(UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText[] richText) {
        this.richText = richText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesSummary withType(String type) {
        this.type = type;
        return this;
    }
}
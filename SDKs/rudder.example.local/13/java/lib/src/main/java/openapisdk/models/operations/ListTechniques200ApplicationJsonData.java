package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTechniques200ApplicationJsonData {
    @JsonProperty("techniques")
    public openapisdk.models.shared.Techniques[] techniques;
    public ListTechniques200ApplicationJsonData withTechniques(openapisdk.models.shared.Techniques[] techniques) {
        this.techniques = techniques;
        return this;
    }
}
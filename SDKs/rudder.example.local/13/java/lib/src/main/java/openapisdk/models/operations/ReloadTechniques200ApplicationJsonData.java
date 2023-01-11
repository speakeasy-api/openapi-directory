package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadTechniques200ApplicationJsonData {
    @JsonProperty("techniques")
    public ReloadTechniques200ApplicationJsonDataTechniquesEnum techniques;
    public ReloadTechniques200ApplicationJsonData withTechniques(ReloadTechniques200ApplicationJsonDataTechniquesEnum techniques) {
        this.techniques = techniques;
        return this;
    }
}
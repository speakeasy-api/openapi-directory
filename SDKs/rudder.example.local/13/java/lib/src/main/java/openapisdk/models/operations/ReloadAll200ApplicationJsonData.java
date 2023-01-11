package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadAll200ApplicationJsonData {
    @JsonProperty("groups")
    public ReloadAll200ApplicationJsonDataGroupsEnum groups;
    public ReloadAll200ApplicationJsonData withGroups(ReloadAll200ApplicationJsonDataGroupsEnum groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("techniques")
    public ReloadAll200ApplicationJsonDataTechniquesEnum techniques;
    public ReloadAll200ApplicationJsonData withTechniques(ReloadAll200ApplicationJsonDataTechniquesEnum techniques) {
        this.techniques = techniques;
        return this;
    }
}
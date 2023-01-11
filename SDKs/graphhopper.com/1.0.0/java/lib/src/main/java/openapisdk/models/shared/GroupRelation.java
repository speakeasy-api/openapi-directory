package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GroupRelation {
    @JsonProperty("groups")
    public String[] groups;
    public GroupRelation withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GroupRelation withType(String type) {
        this.type = type;
        return this;
    }
}
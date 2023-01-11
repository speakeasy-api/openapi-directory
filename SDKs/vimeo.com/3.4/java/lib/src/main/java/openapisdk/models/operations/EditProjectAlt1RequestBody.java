package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EditProjectAlt1RequestBody {
    @JsonProperty("name")
    public String name;
    public EditProjectAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
}
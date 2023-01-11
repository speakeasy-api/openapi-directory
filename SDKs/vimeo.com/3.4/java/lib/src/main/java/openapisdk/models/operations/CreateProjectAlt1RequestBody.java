package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProjectAlt1RequestBody {
    @JsonProperty("name")
    public String name;
    public CreateProjectAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
}
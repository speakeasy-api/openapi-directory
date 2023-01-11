package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EditProjectRequestBody {
    @JsonProperty("name")
    public String name;
    public EditProjectRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}
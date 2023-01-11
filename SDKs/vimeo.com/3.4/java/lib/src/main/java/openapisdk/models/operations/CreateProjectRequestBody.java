package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProjectRequestBody {
    @JsonProperty("name")
    public String name;
    public CreateProjectRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}
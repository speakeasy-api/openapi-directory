package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsCreateColumnRequestBody {
    @JsonProperty("name")
    public String name;
    public ProjectsCreateColumnRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}
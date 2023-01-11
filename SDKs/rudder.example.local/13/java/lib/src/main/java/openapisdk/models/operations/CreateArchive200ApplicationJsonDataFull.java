package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateArchive200ApplicationJsonDataFull {
    @JsonProperty("commiter")
    public String commiter;
    public CreateArchive200ApplicationJsonDataFull withCommiter(String commiter) {
        this.commiter = commiter;
        return this;
    }
    @JsonProperty("gitCommit")
    public String gitCommit;
    public CreateArchive200ApplicationJsonDataFull withGitCommit(String gitCommit) {
        this.gitCommit = gitCommit;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateArchive200ApplicationJsonDataFull withId(String id) {
        this.id = id;
        return this;
    }
}
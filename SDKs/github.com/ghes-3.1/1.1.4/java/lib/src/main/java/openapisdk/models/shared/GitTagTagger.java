package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GitTagTagger {
    @JsonProperty("date")
    public String date;
    public GitTagTagger withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public GitTagTagger withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GitTagTagger withName(String name) {
        this.name = name;
        return this;
    }
}
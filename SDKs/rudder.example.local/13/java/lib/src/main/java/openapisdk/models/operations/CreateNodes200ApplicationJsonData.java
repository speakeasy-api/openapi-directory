package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNodes200ApplicationJsonData {
    @JsonProperty("created")
    public String[] created;
    public CreateNodes200ApplicationJsonData withCreated(String[] created) {
        this.created = created;
        return this;
    }
    @JsonProperty("failed")
    public String[] failed;
    public CreateNodes200ApplicationJsonData withFailed(String[] failed) {
        this.failed = failed;
        return this;
    }
}
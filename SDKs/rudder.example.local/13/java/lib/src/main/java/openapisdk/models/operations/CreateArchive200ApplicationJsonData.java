package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateArchive200ApplicationJsonData {
    @JsonProperty("full")
    public CreateArchive200ApplicationJsonDataFull full;
    public CreateArchive200ApplicationJsonData withFull(CreateArchive200ApplicationJsonDataFull full) {
        this.full = full;
        return this;
    }
}
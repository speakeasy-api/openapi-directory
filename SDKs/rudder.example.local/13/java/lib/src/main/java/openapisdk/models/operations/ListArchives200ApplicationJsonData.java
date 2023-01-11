package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListArchives200ApplicationJsonData {
    @JsonProperty("full")
    public ListArchives200ApplicationJsonDataFull[] full;
    public ListArchives200ApplicationJsonData withFull(ListArchives200ApplicationJsonDataFull[] full) {
        this.full = full;
        return this;
    }
}
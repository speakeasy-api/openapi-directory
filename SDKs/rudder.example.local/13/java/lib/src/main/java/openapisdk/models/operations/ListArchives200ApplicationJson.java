package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListArchives200ApplicationJson {
    @JsonProperty("action")
    public ListArchives200ApplicationJsonActionEnum action;
    public ListArchives200ApplicationJson withAction(ListArchives200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListArchives200ApplicationJsonData data;
    public ListArchives200ApplicationJson withData(ListArchives200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListArchives200ApplicationJsonResultEnum result;
    public ListArchives200ApplicationJson withResult(ListArchives200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PurgeSoftware200ApplicationJson {
    @JsonProperty("action")
    public PurgeSoftware200ApplicationJsonActionEnum action;
    public PurgeSoftware200ApplicationJson withAction(PurgeSoftware200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String[] data;
    public PurgeSoftware200ApplicationJson withData(String[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public PurgeSoftware200ApplicationJsonResultEnum result;
    public PurgeSoftware200ApplicationJson withResult(PurgeSoftware200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}
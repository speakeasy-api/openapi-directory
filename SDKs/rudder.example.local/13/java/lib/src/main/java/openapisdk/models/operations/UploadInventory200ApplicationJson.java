package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UploadInventory200ApplicationJson {
    @JsonProperty("action")
    public UploadInventory200ApplicationJsonActionEnum action;
    public UploadInventory200ApplicationJson withAction(UploadInventory200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public UploadInventory200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UploadInventory200ApplicationJsonResultEnum result;
    public UploadInventory200ApplicationJson withResult(UploadInventory200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}
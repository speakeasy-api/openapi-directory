package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGroupCategoryDetails200ApplicationJson {
    @JsonProperty("action")
    public GetGroupCategoryDetails200ApplicationJsonActionEnum action;
    public GetGroupCategoryDetails200ApplicationJson withAction(GetGroupCategoryDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetGroupCategoryDetails200ApplicationJsonData data;
    public GetGroupCategoryDetails200ApplicationJson withData(GetGroupCategoryDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetGroupCategoryDetails200ApplicationJsonResultEnum result;
    public GetGroupCategoryDetails200ApplicationJson withResult(GetGroupCategoryDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}
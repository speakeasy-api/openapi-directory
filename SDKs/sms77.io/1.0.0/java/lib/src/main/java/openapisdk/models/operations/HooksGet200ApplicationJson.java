package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HooksGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hooks")
    public HooksGet200ApplicationJsonHooks[] hooks;
    public HooksGet200ApplicationJson withHooks(HooksGet200ApplicationJsonHooks[] hooks) {
        this.hooks = hooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public HooksGet200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
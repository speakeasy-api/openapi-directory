package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScriptTag200ApplicationJsonScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope;
    public CreateScriptTag200ApplicationJsonScriptTag withDisplayScope(CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CreateScriptTag200ApplicationJsonScriptTag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public CreateScriptTag200ApplicationJsonScriptTag withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public CreateScriptTag200ApplicationJsonScriptTag withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public CreateScriptTag200ApplicationJsonScriptTag withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
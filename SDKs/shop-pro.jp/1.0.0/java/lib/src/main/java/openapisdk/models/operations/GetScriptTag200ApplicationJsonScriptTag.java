package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetScriptTag200ApplicationJsonScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope;
    public GetScriptTag200ApplicationJsonScriptTag withDisplayScope(GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetScriptTag200ApplicationJsonScriptTag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public GetScriptTag200ApplicationJsonScriptTag withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public GetScriptTag200ApplicationJsonScriptTag withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public GetScriptTag200ApplicationJsonScriptTag withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
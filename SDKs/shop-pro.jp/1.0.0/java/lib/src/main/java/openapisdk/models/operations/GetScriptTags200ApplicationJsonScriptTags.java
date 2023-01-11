package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetScriptTags200ApplicationJsonScriptTags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum displayScope;
    public GetScriptTags200ApplicationJsonScriptTags withDisplayScope(GetScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetScriptTags200ApplicationJsonScriptTags withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public GetScriptTags200ApplicationJsonScriptTags withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public GetScriptTags200ApplicationJsonScriptTags withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public GetScriptTags200ApplicationJsonScriptTags withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
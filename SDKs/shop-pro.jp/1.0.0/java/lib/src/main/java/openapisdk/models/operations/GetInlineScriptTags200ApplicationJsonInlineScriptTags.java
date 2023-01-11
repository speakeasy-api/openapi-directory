package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInlineScriptTags200ApplicationJsonInlineScriptTags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum displayScope;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withDisplayScope(GetInlineScriptTags200ApplicationJsonInlineScriptTagsDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_application_id")
    public Long oauthApplicationId;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withOauthApplicationId(Long oauthApplicationId) {
        this.oauthApplicationId = oauthApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_event")
    public GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum triggerEvent;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withTriggerEvent(GetInlineScriptTags200ApplicationJsonInlineScriptTagsTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public GetInlineScriptTags200ApplicationJsonInlineScriptTags withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInlineScriptTag200ApplicationJsonInlineScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum displayScope;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withDisplayScope(GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_application_id")
    public Long oauthApplicationId;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withOauthApplicationId(Long oauthApplicationId) {
        this.oauthApplicationId = oauthApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_event")
    public GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum triggerEvent;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withTriggerEvent(GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public GetInlineScriptTag200ApplicationJsonInlineScriptTag withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
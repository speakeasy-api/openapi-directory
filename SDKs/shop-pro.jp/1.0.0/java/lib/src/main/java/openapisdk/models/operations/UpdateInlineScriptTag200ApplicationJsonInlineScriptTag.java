package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInlineScriptTag200ApplicationJsonInlineScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum displayScope;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withDisplayScope(UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_application_id")
    public Long oauthApplicationId;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withOauthApplicationId(Long oauthApplicationId) {
        this.oauthApplicationId = oauthApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_event")
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum triggerEvent;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withTriggerEvent(UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public UpdateInlineScriptTag200ApplicationJsonInlineScriptTag withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
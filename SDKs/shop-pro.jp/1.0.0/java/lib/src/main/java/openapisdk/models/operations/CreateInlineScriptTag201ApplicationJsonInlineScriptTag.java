package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInlineScriptTag201ApplicationJsonInlineScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum displayScope;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withDisplayScope(CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_application_id")
    public Long oauthApplicationId;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withOauthApplicationId(Long oauthApplicationId) {
        this.oauthApplicationId = oauthApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_event")
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum triggerEvent;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withTriggerEvent(CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum triggerEvent) {
        this.triggerEvent = triggerEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public CreateInlineScriptTag201ApplicationJsonInlineScriptTag withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
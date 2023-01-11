package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetShopScriptTags200ApplicationJsonScriptTags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public GetShopScriptTags200ApplicationJsonScriptTags withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum displayScope;
    public GetShopScriptTags200ApplicationJsonScriptTags withDisplayScope(GetShopScriptTags200ApplicationJsonScriptTagsDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetShopScriptTags200ApplicationJsonScriptTags withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrity")
    public String integrity;
    public GetShopScriptTags200ApplicationJsonScriptTags withIntegrity(String integrity) {
        this.integrity = integrity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public GetShopScriptTags200ApplicationJsonScriptTags withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_application_id")
    public Long oauthApplicationId;
    public GetShopScriptTags200ApplicationJsonScriptTags withOauthApplicationId(Long oauthApplicationId) {
        this.oauthApplicationId = oauthApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public GetShopScriptTags200ApplicationJsonScriptTags withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public GetShopScriptTags200ApplicationJsonScriptTags withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateShopScriptTag200ApplicationJsonScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withDisplayScope(UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrity")
    public String integrity;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withIntegrity(String integrity) {
        this.integrity = integrity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_application_id")
    public Long oauthApplicationId;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withOauthApplicationId(Long oauthApplicationId) {
        this.oauthApplicationId = oauthApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public UpdateShopScriptTag200ApplicationJsonScriptTag withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
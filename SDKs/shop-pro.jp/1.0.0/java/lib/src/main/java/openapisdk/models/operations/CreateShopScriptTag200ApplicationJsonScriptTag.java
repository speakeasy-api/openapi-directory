package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateShopScriptTag200ApplicationJsonScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CreateShopScriptTag200ApplicationJsonScriptTag withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope;
    public CreateShopScriptTag200ApplicationJsonScriptTag withDisplayScope(CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CreateShopScriptTag200ApplicationJsonScriptTag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrity")
    public String integrity;
    public CreateShopScriptTag200ApplicationJsonScriptTag withIntegrity(String integrity) {
        this.integrity = integrity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("make_date")
    public Long makeDate;
    public CreateShopScriptTag200ApplicationJsonScriptTag withMakeDate(Long makeDate) {
        this.makeDate = makeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_application_id")
    public Long oauthApplicationId;
    public CreateShopScriptTag200ApplicationJsonScriptTag withOauthApplicationId(Long oauthApplicationId) {
        this.oauthApplicationId = oauthApplicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public CreateShopScriptTag200ApplicationJsonScriptTag withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public Long updateDate;
    public CreateShopScriptTag200ApplicationJsonScriptTag withUpdateDate(Long updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateShopScriptTagRequestBodyScriptTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_scope")
    public CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum displayScope;
    public CreateShopScriptTagRequestBodyScriptTag withDisplayScope(CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum displayScope) {
        this.displayScope = displayScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrity")
    public String integrity;
    public CreateShopScriptTagRequestBodyScriptTag withIntegrity(String integrity) {
        this.integrity = integrity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public CreateShopScriptTagRequestBodyScriptTag withSrc(String src) {
        this.src = src;
        return this;
    }
}
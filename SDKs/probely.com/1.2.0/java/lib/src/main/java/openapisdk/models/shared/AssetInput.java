package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetInput
 * Secondary domain of a target
**/
public class AssetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public Cookies[] cookies;
    public AssetInput withCookies(Cookies[] cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public AssetInput withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Headers[] headers;
    public AssetInput withHeaders(Headers[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public AssetInput withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public Boolean include;
    public AssetInput withInclude(Boolean include) {
        this.include = include;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssetInput withName(String name) {
        this.name = name;
        return this;
    }
}
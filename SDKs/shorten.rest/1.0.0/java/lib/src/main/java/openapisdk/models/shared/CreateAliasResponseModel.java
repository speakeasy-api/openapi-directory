package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAliasResponseModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliasName")
    public String aliasName;
    public CreateAliasResponseModel withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public CreateAliasResponseModel withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortUrl")
    public String shortUrl;
    public CreateAliasResponseModel withShortUrl(String shortUrl) {
        this.shortUrl = shortUrl;
        return this;
    }
}
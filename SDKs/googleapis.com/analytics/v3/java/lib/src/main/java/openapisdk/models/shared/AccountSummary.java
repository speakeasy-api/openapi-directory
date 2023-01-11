package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSummary
 * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
**/
public class AccountSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountSummary withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred")
    public Boolean starred;
    public AccountSummary withStarred(Boolean starred) {
        this.starred = starred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webProperties")
    public WebPropertySummary[] webProperties;
    public AccountSummary withWebProperties(WebPropertySummary[] webProperties) {
        this.webProperties = webProperties;
        return this;
    }
}
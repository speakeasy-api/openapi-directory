package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityAdWordsLink
 * JSON template for Analytics Entity Google Ads Link.
**/
public class EntityAdWordsLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adWordsAccounts")
    public AdWordsAccount[] adWordsAccounts;
    public EntityAdWordsLink withAdWordsAccounts(AdWordsAccount[] adWordsAccounts) {
        this.adWordsAccounts = adWordsAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public EntityAdWordsLinkEntity entity;
    public EntityAdWordsLink withEntity(EntityAdWordsLinkEntity entity) {
        this.entity = entity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EntityAdWordsLink withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EntityAdWordsLink withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EntityAdWordsLink withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileIds")
    public String[] profileIds;
    public EntityAdWordsLink withProfileIds(String[] profileIds) {
        this.profileIds = profileIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public EntityAdWordsLink withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}
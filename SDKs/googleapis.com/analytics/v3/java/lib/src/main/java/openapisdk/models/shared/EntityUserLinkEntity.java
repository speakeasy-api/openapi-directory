package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntityUserLinkEntity
 * Entity for this link. It can be an account, a web property, or a view (profile).
**/
public class EntityUserLinkEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountRef")
    public AccountRef accountRef;
    public EntityUserLinkEntity withAccountRef(AccountRef accountRef) {
        this.accountRef = accountRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileRef")
    public ProfileRef profileRef;
    public EntityUserLinkEntity withProfileRef(ProfileRef profileRef) {
        this.profileRef = profileRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyRef")
    public WebPropertyRef webPropertyRef;
    public EntityUserLinkEntity withWebPropertyRef(WebPropertyRef webPropertyRef) {
        this.webPropertyRef = webPropertyRef;
        return this;
    }
}
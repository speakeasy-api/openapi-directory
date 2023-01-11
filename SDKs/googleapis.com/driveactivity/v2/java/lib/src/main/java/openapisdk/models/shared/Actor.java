package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Actor
 * The actor of a Drive activity.
**/
public class Actor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("administrator")
    public java.util.Map<String, Object> administrator;
    public Actor withAdministrator(java.util.Map<String, Object> administrator) {
        this.administrator = administrator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymous")
    public java.util.Map<String, Object> anonymous;
    public Actor withAnonymous(java.util.Map<String, Object> anonymous) {
        this.anonymous = anonymous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impersonation")
    public Impersonation impersonation;
    public Actor withImpersonation(Impersonation impersonation) {
        this.impersonation = impersonation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system")
    public SystemEvent system;
    public Actor withSystem(SystemEvent system) {
        this.system = system;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Actor withUser(User user) {
        this.user = user;
        return this;
    }
}
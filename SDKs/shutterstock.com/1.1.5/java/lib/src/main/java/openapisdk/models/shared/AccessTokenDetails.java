package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessTokenDetails
 * Access token details that are currently associated with this user
**/
public class AccessTokenDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AccessTokenDetails withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_id")
    public String contributorId;
    public AccessTokenDetails withContributorId(String contributorId) {
        this.contributorId = contributorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public AccessTokenDetails withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Long expiresIn;
    public AccessTokenDetails withExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_id")
    public String organizationId;
    public AccessTokenDetails withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realm")
    public AccessTokenDetailsRealmEnum realm;
    public AccessTokenDetails withRealm(AccessTokenDetailsRealmEnum realm) {
        this.realm = realm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public AccessTokenDetails withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public AccessTokenDetails withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public AccessTokenDetails withUsername(String username) {
        this.username = username;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkMerakiAuthUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizations")
    public UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[] authorizations;
    public UpdateNetworkMerakiAuthUserRequestBody withAuthorizations(UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[] authorizations) {
        this.authorizations = authorizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailPasswordToUser")
    public Boolean emailPasswordToUser;
    public UpdateNetworkMerakiAuthUserRequestBody withEmailPasswordToUser(Boolean emailPasswordToUser) {
        this.emailPasswordToUser = emailPasswordToUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkMerakiAuthUserRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UpdateNetworkMerakiAuthUserRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}
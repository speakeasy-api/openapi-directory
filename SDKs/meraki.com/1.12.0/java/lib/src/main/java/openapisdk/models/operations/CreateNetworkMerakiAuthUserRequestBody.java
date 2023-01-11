package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkMerakiAuthUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum accountType;
    public CreateNetworkMerakiAuthUserRequestBody withAccountType(CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonProperty("authorizations")
    public CreateNetworkMerakiAuthUserRequestBodyAuthorizations[] authorizations;
    public CreateNetworkMerakiAuthUserRequestBody withAuthorizations(CreateNetworkMerakiAuthUserRequestBodyAuthorizations[] authorizations) {
        this.authorizations = authorizations;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public CreateNetworkMerakiAuthUserRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailPasswordToUser")
    public Boolean emailPasswordToUser;
    public CreateNetworkMerakiAuthUserRequestBody withEmailPasswordToUser(Boolean emailPasswordToUser) {
        this.emailPasswordToUser = emailPasswordToUser;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkMerakiAuthUserRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public CreateNetworkMerakiAuthUserRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}
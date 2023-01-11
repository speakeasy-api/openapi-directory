package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthorizedCompanyListViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AuthorizedCompanyListViewModel withEmail(String email) {
        this.email = email;
        return this;
    }
}
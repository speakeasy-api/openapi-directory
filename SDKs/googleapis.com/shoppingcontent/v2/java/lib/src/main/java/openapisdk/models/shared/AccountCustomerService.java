package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountCustomerService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AccountCustomerService withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public AccountCustomerService withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AccountCustomerService withUrl(String url) {
        this.url = url;
        return this;
    }
}
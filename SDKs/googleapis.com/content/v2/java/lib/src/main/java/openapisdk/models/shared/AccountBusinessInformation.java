package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountBusinessInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress address;
    public AccountBusinessInformation withAddress(AccountAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerService")
    public AccountCustomerService customerService;
    public AccountBusinessInformation withCustomerService(AccountCustomerService customerService) {
        this.customerService = customerService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("koreanBusinessRegistrationNumber")
    public String koreanBusinessRegistrationNumber;
    public AccountBusinessInformation withKoreanBusinessRegistrationNumber(String koreanBusinessRegistrationNumber) {
        this.koreanBusinessRegistrationNumber = koreanBusinessRegistrationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public AccountBusinessInformation withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}
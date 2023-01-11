package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectRoyalMailRequestBody
 * A Royal Mail account information request body
**/
public class ConnectRoyalMailRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectRoyalMailRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public ConnectRoyalMailRequestBody withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public ConnectRoyalMailRequestBody withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("contact_name")
    public String contactName;
    public ConnectRoyalMailRequestBody withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ConnectRoyalMailRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectRoyalMailRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oba_email")
    public String obaEmail;
    public ConnectRoyalMailRequestBody withObaEmail(String obaEmail) {
        this.obaEmail = obaEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public ConnectRoyalMailRequestBody withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonProperty("postal_code")
    public String postalCode;
    public ConnectRoyalMailRequestBody withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_line1")
    public String streetLine1;
    public ConnectRoyalMailRequestBody withStreetLine1(String streetLine1) {
        this.streetLine1 = streetLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_line2")
    public String streetLine2;
    public ConnectRoyalMailRequestBody withStreetLine2(String streetLine2) {
        this.streetLine2 = streetLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_line3")
    public String streetLine3;
    public ConnectRoyalMailRequestBody withStreetLine3(String streetLine3) {
        this.streetLine3 = streetLine3;
        return this;
    }
}
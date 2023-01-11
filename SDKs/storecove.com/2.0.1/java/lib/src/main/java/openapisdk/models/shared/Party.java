package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Party
 * A party that can receive or send invoices
**/
public class Party {
    @JsonProperty("address")
    public Address address;
    public Party withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonProperty("companyName")
    public String companyName;
    public Party withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public Contact contact;
    public Party withContact(Contact contact) {
        this.contact = contact;
        return this;
    }
}
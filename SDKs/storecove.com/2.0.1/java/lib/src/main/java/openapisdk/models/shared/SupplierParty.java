package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SupplierParty
 * A party that can send invoices
**/
public class SupplierParty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public Contact contact;
    public SupplierParty withContact(Contact contact) {
        this.contact = contact;
        return this;
    }
}
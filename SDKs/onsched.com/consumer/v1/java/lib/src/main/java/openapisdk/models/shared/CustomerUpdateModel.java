package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomerUpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AddressUpdateModel address;
    public CustomerUpdateModel withAddress(AddressUpdateModel address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public ContactUpdateModel contact;
    public CustomerUpdateModel withContact(ContactUpdateModel contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public CustomFieldUpdateModel customFields;
    public CustomerUpdateModel withCustomFields(CustomFieldUpdateModel customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CustomerUpdateModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public CustomerUpdateModel withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public CustomerUpdateModel withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public CustomerUpdateModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomerUpdateModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationType")
    public String notificationType;
    public CustomerUpdateModel withNotificationType(String notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeCustomerId")
    public String stripeCustomerId;
    public CustomerUpdateModel withStripeCustomerId(String stripeCustomerId) {
        this.stripeCustomerId = stripeCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Integer type;
    public CustomerUpdateModel withType(Integer type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AddressInputModel address;
    public ResourceInputModel withAddress(AddressInputModel address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public AvailabilityInputModel availability;
    public ResourceInputModel withAvailability(AvailabilityInputModel availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public ContactInputModel contact;
    public ResourceInputModel withContact(ContactInputModel contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public CustomFieldInputModel customFields;
    public ResourceInputModel withCustomFields(CustomFieldInputModel customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ResourceInputModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ResourceInputModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public ResourceInputModel withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ResourceInputModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceInputModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public ResourceOptionsInputModel options;
    public ResourceInputModel withOptions(ResourceOptionsInputModel options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceIds")
    public String[] serviceIds;
    public ResourceInputModel withServiceIds(String[] serviceIds) {
        this.serviceIds = serviceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneId")
    public String timezoneId;
    public ResourceInputModel withTimezoneId(String timezoneId) {
        this.timezoneId = timezoneId;
        return this;
    }
}
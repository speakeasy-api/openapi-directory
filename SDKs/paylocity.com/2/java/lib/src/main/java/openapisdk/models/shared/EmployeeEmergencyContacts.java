package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEmergencyContacts
 * The emergency contact model
**/
public class EmployeeEmergencyContacts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address1")
    public String address1;
    public EmployeeEmergencyContacts withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public EmployeeEmergencyContacts withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public EmployeeEmergencyContacts withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public EmployeeEmergencyContacts withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public EmployeeEmergencyContacts withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public EmployeeEmergencyContacts withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public EmployeeEmergencyContacts withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homePhone")
    public String homePhone;
    public EmployeeEmergencyContacts withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public EmployeeEmergencyContacts withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilePhone")
    public String mobilePhone;
    public EmployeeEmergencyContacts withMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public EmployeeEmergencyContacts withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pager")
    public String pager;
    public EmployeeEmergencyContacts withPager(String pager) {
        this.pager = pager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public String primaryPhone;
    public EmployeeEmergencyContacts withPrimaryPhone(String primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public EmployeeEmergencyContacts withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationship")
    public String relationship;
    public EmployeeEmergencyContacts withRelationship(String relationship) {
        this.relationship = relationship;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public EmployeeEmergencyContacts withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncEmployeeInfo")
    public Boolean syncEmployeeInfo;
    public EmployeeEmergencyContacts withSyncEmployeeInfo(Boolean syncEmployeeInfo) {
        this.syncEmployeeInfo = syncEmployeeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workExtension")
    public String workExtension;
    public EmployeeEmergencyContacts withWorkExtension(String workExtension) {
        this.workExtension = workExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workPhone")
    public String workPhone;
    public EmployeeEmergencyContacts withWorkPhone(String workPhone) {
        this.workPhone = workPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public EmployeeEmergencyContacts withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
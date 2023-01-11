package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmergencyContact
 * The emergency contact model
**/
public class EmergencyContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address1")
    public String address1;
    public EmergencyContact withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public EmergencyContact withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public EmergencyContact withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public EmergencyContact withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public EmergencyContact withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public EmergencyContact withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public EmergencyContact withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homePhone")
    public String homePhone;
    public EmergencyContact withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public EmergencyContact withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilePhone")
    public String mobilePhone;
    public EmergencyContact withMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public EmergencyContact withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pager")
    public String pager;
    public EmergencyContact withPager(String pager) {
        this.pager = pager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public String primaryPhone;
    public EmergencyContact withPrimaryPhone(String primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public EmergencyContact withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationship")
    public String relationship;
    public EmergencyContact withRelationship(String relationship) {
        this.relationship = relationship;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public EmergencyContact withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncEmployeeInfo")
    public Boolean syncEmployeeInfo;
    public EmergencyContact withSyncEmployeeInfo(Boolean syncEmployeeInfo) {
        this.syncEmployeeInfo = syncEmployeeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workExtension")
    public String workExtension;
    public EmergencyContact withWorkExtension(String workExtension) {
        this.workExtension = workExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workPhone")
    public String workPhone;
    public EmergencyContact withWorkPhone(String workPhone) {
        this.workPhone = workPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public EmergencyContact withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
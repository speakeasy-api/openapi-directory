package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordDetailsModel
 * Landlord Details
**/
public class LandlordDetailsModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public String address;
    public LandlordDetailsModel withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public LandlordDetailsModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalReference")
    public String globalReference;
    public LandlordDetailsModel withGlobalReference(String globalReference) {
        this.globalReference = globalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ID")
    public String id;
    public LandlordDetailsModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mobile")
    public String mobile;
    public LandlordDetailsModel withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public LandlordDetailsModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Phone")
    public String phone;
    public LandlordDetailsModel withPhone(String phone) {
        this.phone = phone;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContactInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessPhone")
    public String businessPhone;
    public ContactInputModel withBusinessPhone(String businessPhone) {
        this.businessPhone = businessPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessPhoneExt")
    public String businessPhoneExt;
    public ContactInputModel withBusinessPhoneExt(String businessPhoneExt) {
        this.businessPhoneExt = businessPhoneExt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferenceInfo")
    public String conferenceInfo;
    public ContactInputModel withConferenceInfo(String conferenceInfo) {
        this.conferenceInfo = conferenceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homePhone")
    public String homePhone;
    public ContactInputModel withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilePhone")
    public String mobilePhone;
    public ContactInputModel withMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredPhoneType")
    public String preferredPhoneType;
    public ContactInputModel withPreferredPhoneType(String preferredPhoneType) {
        this.preferredPhoneType = preferredPhoneType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skypeUsername")
    public String skypeUsername;
    public ContactInputModel withSkypeUsername(String skypeUsername) {
        this.skypeUsername = skypeUsername;
        return this;
    }
}
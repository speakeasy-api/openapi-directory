package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactInfoList
 * Wrapper message for a list of contact information defining Customer Match audience members.
**/
public class ContactInfoList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactInfos")
    public ContactInfo[] contactInfos;
    public ContactInfoList withContactInfos(ContactInfo[] contactInfos) {
        this.contactInfos = contactInfos;
        return this;
    }
}
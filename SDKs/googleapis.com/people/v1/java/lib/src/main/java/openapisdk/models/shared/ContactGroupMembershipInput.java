package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactGroupMembershipInput
 * A Google contact group membership.
**/
public class ContactGroupMembershipInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroupResourceName")
    public String contactGroupResourceName;
    public ContactGroupMembershipInput withContactGroupResourceName(String contactGroupResourceName) {
        this.contactGroupResourceName = contactGroupResourceName;
        return this;
    }
}
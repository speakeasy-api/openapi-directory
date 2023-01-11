package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactGroupMembership
 * A Google contact group membership.
**/
public class ContactGroupMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroupId")
    public String contactGroupId;
    public ContactGroupMembership withContactGroupId(String contactGroupId) {
        this.contactGroupId = contactGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroupResourceName")
    public String contactGroupResourceName;
    public ContactGroupMembership withContactGroupResourceName(String contactGroupResourceName) {
        this.contactGroupResourceName = contactGroupResourceName;
        return this;
    }
}
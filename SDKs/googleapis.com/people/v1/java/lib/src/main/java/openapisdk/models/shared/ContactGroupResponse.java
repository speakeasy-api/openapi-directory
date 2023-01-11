package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactGroupResponse
 * The response for a specific contact group.
**/
public class ContactGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactGroup")
    public ContactGroup contactGroup;
    public ContactGroupResponse withContactGroup(ContactGroup contactGroup) {
        this.contactGroup = contactGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedResourceName")
    public String requestedResourceName;
    public ContactGroupResponse withRequestedResourceName(String requestedResourceName) {
        this.requestedResourceName = requestedResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public ContactGroupResponse withStatus(Status status) {
        this.status = status;
        return this;
    }
}
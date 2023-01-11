package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLocationAdminsResponse
 * Response message for AccessControl.ListLocationAdmins.
**/
public class ListLocationAdminsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admins")
    public Admin[] admins;
    public ListLocationAdminsResponse withAdmins(Admin[] admins) {
        this.admins = admins;
        return this;
    }
}
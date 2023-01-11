package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseAssignmentInsert
 * Representation of a license assignment.
**/
public class LicenseAssignmentInsert {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public LicenseAssignmentInsert withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
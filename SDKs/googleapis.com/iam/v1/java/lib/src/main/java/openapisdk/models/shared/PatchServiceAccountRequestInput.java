package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchServiceAccountRequestInput
 * The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response.
**/
public class PatchServiceAccountRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public ServiceAccountInput serviceAccount;
    public PatchServiceAccountRequestInput withServiceAccount(ServiceAccountInput serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public PatchServiceAccountRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}
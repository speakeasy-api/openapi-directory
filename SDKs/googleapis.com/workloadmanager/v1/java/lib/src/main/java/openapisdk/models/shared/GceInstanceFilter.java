package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GceInstanceFilter
 * Message describing compute engine instance filter
**/
public class GceInstanceFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccounts")
    public String[] serviceAccounts;
    public GceInstanceFilter withServiceAccounts(String[] serviceAccounts) {
        this.serviceAccounts = serviceAccounts;
        return this;
    }
}
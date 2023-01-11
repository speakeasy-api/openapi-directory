package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalCustomer
 * Entity representing a SAS customer.
**/
public class SasPortalCustomer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SasPortalCustomer withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SasPortalCustomer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sasUserIds")
    public String[] sasUserIds;
    public SasPortalCustomer withSasUserIds(String[] sasUserIds) {
        this.sasUserIds = sasUserIds;
        return this;
    }
}
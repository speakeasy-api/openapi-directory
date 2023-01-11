package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructuredServiceItem
 * Represents a structured service offered by the merchant. For eg: toilet_installation.
**/
public class StructuredServiceItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public StructuredServiceItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceTypeId")
    public String serviceTypeId;
    public StructuredServiceItem withServiceTypeId(String serviceTypeId) {
        this.serviceTypeId = serviceTypeId;
        return this;
    }
}
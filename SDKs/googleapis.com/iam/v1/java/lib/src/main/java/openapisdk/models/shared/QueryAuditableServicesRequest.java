package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryAuditableServicesRequest
 * A request to get the list of auditable services for a resource.
**/
public class QueryAuditableServicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public QueryAuditableServicesRequest withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
}
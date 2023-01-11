package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryAuditableServicesResponse
 * A response containing a list of auditable services for a resource.
**/
public class QueryAuditableServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public AuditableService[] services;
    public QueryAuditableServicesResponse withServices(AuditableService[] services) {
        this.services = services;
        return this;
    }
}
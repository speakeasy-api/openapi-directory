package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EgressPolicy
 * Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo.
**/
public class EgressPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressFrom")
    public EgressFrom egressFrom;
    public EgressPolicy withEgressFrom(EgressFrom egressFrom) {
        this.egressFrom = egressFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressTo")
    public EgressTo egressTo;
    public EgressPolicy withEgressTo(EgressTo egressTo) {
        this.egressTo = egressTo;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SolutionUnassigned {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breaks")
    public String[] breaks;
    public SolutionUnassigned withBreaks(String[] breaks) {
        this.breaks = breaks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public Detail[] details;
    public SolutionUnassigned withDetails(Detail[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public String[] services;
    public SolutionUnassigned withServices(String[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipments")
    public String[] shipments;
    public SolutionUnassigned withShipments(String[] shipments) {
        this.shipments = shipments;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectivityTestInput
 * A Connectivity Test for a network reachability analysis.
**/
public class ConnectivityTestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConnectivityTestInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Endpoint destination;
    public ConnectivityTestInput withDestination(Endpoint destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ConnectivityTestInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConnectivityTestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probingDetails")
    public ProbingDetails probingDetails;
    public ConnectivityTestInput withProbingDetails(ProbingDetails probingDetails) {
        this.probingDetails = probingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public ConnectivityTestInput withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachabilityDetails")
    public ReachabilityDetails reachabilityDetails;
    public ConnectivityTestInput withReachabilityDetails(ReachabilityDetails reachabilityDetails) {
        this.reachabilityDetails = reachabilityDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedProjects")
    public String[] relatedProjects;
    public ConnectivityTestInput withRelatedProjects(String[] relatedProjects) {
        this.relatedProjects = relatedProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Endpoint source;
    public ConnectivityTestInput withSource(Endpoint source) {
        this.source = source;
        return this;
    }
}
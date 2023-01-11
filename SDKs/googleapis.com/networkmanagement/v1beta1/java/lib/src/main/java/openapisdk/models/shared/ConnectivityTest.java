package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectivityTest
 * A Connectivity Test for a network reachability analysis.
**/
public class ConnectivityTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ConnectivityTest withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConnectivityTest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Endpoint destination;
    public ConnectivityTest withDestination(Endpoint destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ConnectivityTest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ConnectivityTest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConnectivityTest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probingDetails")
    public ProbingDetails probingDetails;
    public ConnectivityTest withProbingDetails(ProbingDetails probingDetails) {
        this.probingDetails = probingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public ConnectivityTest withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachabilityDetails")
    public ReachabilityDetails reachabilityDetails;
    public ConnectivityTest withReachabilityDetails(ReachabilityDetails reachabilityDetails) {
        this.reachabilityDetails = reachabilityDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedProjects")
    public String[] relatedProjects;
    public ConnectivityTest withRelatedProjects(String[] relatedProjects) {
        this.relatedProjects = relatedProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Endpoint source;
    public ConnectivityTest withSource(Endpoint source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ConnectivityTest withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}
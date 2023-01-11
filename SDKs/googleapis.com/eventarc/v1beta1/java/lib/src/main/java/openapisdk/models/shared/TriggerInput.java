package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggerInput
 * A representation of the trigger resource.
**/
public class TriggerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Destination destination;
    public TriggerInput withDestination(Destination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public TriggerInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingCriteria")
    public MatchingCriteria[] matchingCriteria;
    public TriggerInput withMatchingCriteria(MatchingCriteria[] matchingCriteria) {
        this.matchingCriteria = matchingCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TriggerInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public TriggerInput withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport")
    public TransportInput transport;
    public TriggerInput withTransport(TransportInput transport) {
        this.transport = transport;
        return this;
    }
}
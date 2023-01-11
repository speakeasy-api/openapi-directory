package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Trigger
 * A representation of the trigger resource.
**/
public class Trigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Trigger withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Destination destination;
    public Trigger withDestination(Destination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Trigger withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Trigger withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingCriteria")
    public MatchingCriteria[] matchingCriteria;
    public Trigger withMatchingCriteria(MatchingCriteria[] matchingCriteria) {
        this.matchingCriteria = matchingCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Trigger withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public Trigger withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport")
    public Transport transport;
    public Trigger withTransport(Transport transport) {
        this.transport = transport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Trigger withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}
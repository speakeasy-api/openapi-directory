package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Membership
 * Membership contains information about a member cluster.
**/
public class Membership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authority")
    public Authority authority;
    public Membership withAuthority(Authority authority) {
        this.authority = authority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Membership withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public Membership withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Membership withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public MembershipEndpoint endpoint;
    public Membership withEndpoint(MembershipEndpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public Membership withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infrastructureType")
    public MembershipInfrastructureTypeEnum infrastructureType;
    public Membership withInfrastructureType(MembershipInfrastructureTypeEnum infrastructureType) {
        this.infrastructureType = infrastructureType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Membership withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastConnectionTime")
    public String lastConnectionTime;
    public Membership withLastConnectionTime(String lastConnectionTime) {
        this.lastConnectionTime = lastConnectionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Membership withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MembershipState state;
    public Membership withState(MembershipState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueId")
    public String uniqueId;
    public Membership withUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Membership withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}
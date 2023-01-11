package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Client
 * A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.
**/
public class Client {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientAccountId")
    public String clientAccountId;
    public Client withClientAccountId(String clientAccountId) {
        this.clientAccountId = clientAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientName")
    public String clientName;
    public Client withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public Client withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityName")
    public String entityName;
    public Client withEntityName(String entityName) {
        this.entityName = entityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityType")
    public ClientEntityTypeEnum entityType;
    public Client withEntityType(ClientEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerClientId")
    public String partnerClientId;
    public Client withPartnerClientId(String partnerClientId) {
        this.partnerClientId = partnerClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public ClientRoleEnum role;
    public Client withRole(ClientRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ClientStatusEnum status;
    public Client withStatus(ClientStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleToSeller")
    public Boolean visibleToSeller;
    public Client withVisibleToSeller(Boolean visibleToSeller) {
        this.visibleToSeller = visibleToSeller;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GroupApplicationResult {
    @JsonProperty("application_type")
    public GroupApplicationResultApplicationTypeEnum applicationType;
    public GroupApplicationResult withApplicationType(GroupApplicationResultApplicationTypeEnum applicationType) {
        this.applicationType = applicationType;
        return this;
    }
    @JsonProperty("carrier_group_id")
    public String carrierGroupId;
    public GroupApplicationResult withCarrierGroupId(String carrierGroupId) {
        this.carrierGroupId = carrierGroupId;
        return this;
    }
    @JsonProperty("carrier_id")
    public String carrierId;
    public GroupApplicationResult withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public GroupApplicationResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("group_id")
    public String groupId;
    public GroupApplicationResult withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GroupApplicationResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public GroupApplicationResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("notes")
    public String notes;
    public GroupApplicationResult withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("status")
    public GroupApplicationResultStatusEnum status;
    public GroupApplicationResult withStatus(GroupApplicationResultStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_notes")
    public String statusNotes;
    public GroupApplicationResult withStatusNotes(String statusNotes) {
        this.statusNotes = statusNotes;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public GroupApplicationResult withVersion(String version) {
        this.version = version;
        return this;
    }
}
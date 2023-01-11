package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Post {
    @JsonProperty("division_id")
    public String divisionId;
    public Post withDivisionId(String divisionId) {
        this.divisionId = divisionId;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public Post withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("maximum_memberships")
    public Long maximumMemberships;
    public Post withMaximumMemberships(Long maximumMemberships) {
        this.maximumMemberships = maximumMemberships;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public Post withRole(String role) {
        this.role = role;
        return this;
    }
}
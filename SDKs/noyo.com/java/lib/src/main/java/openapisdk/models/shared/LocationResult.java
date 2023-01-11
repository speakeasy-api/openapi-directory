package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LocationResult {
    @JsonProperty("address")
    public LocationResultAddress address;
    public LocationResult withAddress(LocationResultAddress address) {
        this.address = address;
        return this;
    }
    @JsonProperty("billing_location")
    public Boolean billingLocation;
    public LocationResult withBillingLocation(Boolean billingLocation) {
        this.billingLocation = billingLocation;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public LocationResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public LocationResult withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("group_id")
    public String groupId;
    public LocationResult withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public LocationResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public LocationResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("primary_location")
    public Boolean primaryLocation;
    public LocationResult withPrimaryLocation(Boolean primaryLocation) {
        this.primaryLocation = primaryLocation;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public LocationResult withVersion(String version) {
        this.version = version;
        return this;
    }
}
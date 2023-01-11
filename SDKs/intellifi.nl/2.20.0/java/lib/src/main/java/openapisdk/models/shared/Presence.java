package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Presence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Presence withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public Item item;
    public Presence withItem(Item item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item_id")
    public String itemId;
    public Presence withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item_url")
    public String itemUrl;
    public Presence withItemUrl(String itemUrl) {
        this.itemUrl = itemUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public Presence withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public Presence withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_url")
    public String locationUrl;
    public Presence withLocationUrl(String locationUrl) {
        this.locationUrl = locationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximity")
    public ProximityEnum proximity;
    public Presence withProximity(ProximityEnum proximity) {
        this.proximity = proximity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technology")
    public TechnologyEnum technology;
    public Presence withTechnology(TechnologyEnum technology) {
        this.technology = technology;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public Presence withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;
    public Presence withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Presence withUrl(String url) {
        this.url = url;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketplaceTargeting
 * Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
**/
public class MarketplaceTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daypartTargeting")
    public DayPartTargeting daypartTargeting;
    public MarketplaceTargeting withDaypartTargeting(DayPartTargeting daypartTargeting) {
        this.daypartTargeting = daypartTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoTargeting")
    public CriteriaTargeting geoTargeting;
    public MarketplaceTargeting withGeoTargeting(CriteriaTargeting geoTargeting) {
        this.geoTargeting = geoTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySizeTargeting")
    public InventorySizeTargeting inventorySizeTargeting;
    public MarketplaceTargeting withInventorySizeTargeting(InventorySizeTargeting inventorySizeTargeting) {
        this.inventorySizeTargeting = inventorySizeTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryTypeTargeting")
    public InventoryTypeTargeting inventoryTypeTargeting;
    public MarketplaceTargeting withInventoryTypeTargeting(InventoryTypeTargeting inventoryTypeTargeting) {
        this.inventoryTypeTargeting = inventoryTypeTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementTargeting")
    public PlacementTargeting placementTargeting;
    public MarketplaceTargeting withPlacementTargeting(PlacementTargeting placementTargeting) {
        this.placementTargeting = placementTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technologyTargeting")
    public TechnologyTargeting technologyTargeting;
    public MarketplaceTargeting withTechnologyTargeting(TechnologyTargeting technologyTargeting) {
        this.technologyTargeting = technologyTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userListTargeting")
    public CriteriaTargeting userListTargeting;
    public MarketplaceTargeting withUserListTargeting(CriteriaTargeting userListTargeting) {
        this.userListTargeting = userListTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoTargeting")
    public VideoTargeting videoTargeting;
    public MarketplaceTargeting withVideoTargeting(VideoTargeting videoTargeting) {
        this.videoTargeting = videoTargeting;
        return this;
    }
}
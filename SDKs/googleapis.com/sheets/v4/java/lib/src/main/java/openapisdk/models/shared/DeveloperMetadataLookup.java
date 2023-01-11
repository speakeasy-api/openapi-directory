package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeveloperMetadataLookup
 * Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
**/
public class DeveloperMetadataLookup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationMatchingStrategy")
    public DeveloperMetadataLookupLocationMatchingStrategyEnum locationMatchingStrategy;
    public DeveloperMetadataLookup withLocationMatchingStrategy(DeveloperMetadataLookupLocationMatchingStrategyEnum locationMatchingStrategy) {
        this.locationMatchingStrategy = locationMatchingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationType")
    public DeveloperMetadataLookupLocationTypeEnum locationType;
    public DeveloperMetadataLookup withLocationType(DeveloperMetadataLookupLocationTypeEnum locationType) {
        this.locationType = locationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataId")
    public Integer metadataId;
    public DeveloperMetadataLookup withMetadataId(Integer metadataId) {
        this.metadataId = metadataId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataKey")
    public String metadataKey;
    public DeveloperMetadataLookup withMetadataKey(String metadataKey) {
        this.metadataKey = metadataKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataLocation")
    public DeveloperMetadataLocation metadataLocation;
    public DeveloperMetadataLookup withMetadataLocation(DeveloperMetadataLocation metadataLocation) {
        this.metadataLocation = metadataLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataValue")
    public String metadataValue;
    public DeveloperMetadataLookup withMetadataValue(String metadataValue) {
        this.metadataValue = metadataValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public DeveloperMetadataLookupVisibilityEnum visibility;
    public DeveloperMetadataLookup withVisibility(DeveloperMetadataLookupVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}
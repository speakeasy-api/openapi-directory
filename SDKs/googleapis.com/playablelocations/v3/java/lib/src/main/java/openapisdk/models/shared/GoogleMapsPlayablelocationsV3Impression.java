package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3Impression
 * Encapsulates impression event details.
**/
public class GoogleMapsPlayablelocationsV3Impression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gameObjectType")
    public Integer gameObjectType;
    public GoogleMapsPlayablelocationsV3Impression withGameObjectType(Integer gameObjectType) {
        this.gameObjectType = gameObjectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionType")
    public GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum impressionType;
    public GoogleMapsPlayablelocationsV3Impression withImpressionType(GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum impressionType) {
        this.impressionType = impressionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public GoogleMapsPlayablelocationsV3Impression withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
}
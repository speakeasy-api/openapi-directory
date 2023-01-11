package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeveloperMetadata
 * Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
**/
public class DeveloperMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public DeveloperMetadataLocation location;
    public DeveloperMetadata withLocation(DeveloperMetadataLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataId")
    public Integer metadataId;
    public DeveloperMetadata withMetadataId(Integer metadataId) {
        this.metadataId = metadataId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataKey")
    public String metadataKey;
    public DeveloperMetadata withMetadataKey(String metadataKey) {
        this.metadataKey = metadataKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataValue")
    public String metadataValue;
    public DeveloperMetadata withMetadataValue(String metadataValue) {
        this.metadataValue = metadataValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public DeveloperMetadataVisibilityEnum visibility;
    public DeveloperMetadata withVisibility(DeveloperMetadataVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}
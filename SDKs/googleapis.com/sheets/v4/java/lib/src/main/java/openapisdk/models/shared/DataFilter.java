package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataFilter
 * Filter that describes what data should be selected or returned from a request.
**/
public class DataFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("a1Range")
    public String a1Range;
    public DataFilter withA1Range(String a1Range) {
        this.a1Range = a1Range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadataLookup")
    public DeveloperMetadataLookup developerMetadataLookup;
    public DataFilter withDeveloperMetadataLookup(DeveloperMetadataLookup developerMetadataLookup) {
        this.developerMetadataLookup = developerMetadataLookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gridRange")
    public GridRange gridRange;
    public DataFilter withGridRange(GridRange gridRange) {
        this.gridRange = gridRange;
        return this;
    }
}
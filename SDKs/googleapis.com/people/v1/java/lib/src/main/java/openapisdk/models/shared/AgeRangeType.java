package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgeRangeType
 * A person's age range.
**/
public class AgeRangeType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRange")
    public AgeRangeTypeAgeRangeEnum ageRange;
    public AgeRangeType withAgeRange(AgeRangeTypeAgeRangeEnum ageRange) {
        this.ageRange = ageRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public AgeRangeType withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelevantLocation
 * Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.
**/
public class RelevantLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public RelevantLocation withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationType")
    public RelevantLocationRelationTypeEnum relationType;
    public RelevantLocation withRelationType(RelevantLocationRelationTypeEnum relationType) {
        this.relationType = relationType;
        return this;
    }
}
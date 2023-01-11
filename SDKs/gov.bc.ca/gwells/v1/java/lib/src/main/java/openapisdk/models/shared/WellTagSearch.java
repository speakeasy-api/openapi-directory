package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WellTagSearch {
    @JsonProperty("owner_full_name")
    public String ownerFullName;
    public WellTagSearch withOwnerFullName(String ownerFullName) {
        this.ownerFullName = ownerFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("well_tag_number")
    public Long wellTagNumber;
    public WellTagSearch withWellTagNumber(Long wellTagNumber) {
        this.wellTagNumber = wellTagNumber;
        return this;
    }
}
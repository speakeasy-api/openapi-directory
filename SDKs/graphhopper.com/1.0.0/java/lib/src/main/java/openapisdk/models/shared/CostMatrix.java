package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CostMatrix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public CostMatrixData data;
    public CostMatrix withData(CostMatrixData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_ids")
    public String[] locationIds;
    public CostMatrix withLocationIds(String[] locationIds) {
        this.locationIds = locationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public CostMatrix withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CostMatrixTypeEnum type;
    public CostMatrix withType(CostMatrixTypeEnum type) {
        this.type = type;
        return this;
    }
}
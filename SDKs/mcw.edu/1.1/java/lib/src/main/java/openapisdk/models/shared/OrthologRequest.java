package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrthologRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rgdIds")
    public Integer[] rgdIds;
    public OrthologRequest withRgdIds(Integer[] rgdIds) {
        this.rgdIds = rgdIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speciesTypeKeys")
    public Integer[] speciesTypeKeys;
    public OrthologRequest withSpeciesTypeKeys(Integer[] speciesTypeKeys) {
        this.speciesTypeKeys = speciesTypeKeys;
        return this;
    }
}
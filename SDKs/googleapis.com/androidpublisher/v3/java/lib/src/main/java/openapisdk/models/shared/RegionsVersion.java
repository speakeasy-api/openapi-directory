package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionsVersion
 * The version of the available regions being used for the specified resource.
**/
public class RegionsVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public RegionsVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}
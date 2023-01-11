package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCveListRequestBody
 * cveList
**/
public class GetCveListRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cveIds")
    public String[] cveIds;
    public GetCveListRequestBody withCveIds(String[] cveIds) {
        this.cveIds = cveIds;
        return this;
    }
}
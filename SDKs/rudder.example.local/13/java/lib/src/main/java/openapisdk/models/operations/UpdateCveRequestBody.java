package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCveRequestBody
 * CVE update config
**/
public class UpdateCveRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UpdateCveRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("years")
    public String[] years;
    public UpdateCveRequestBody withYears(String[] years) {
        this.years = years;
        return this;
    }
}
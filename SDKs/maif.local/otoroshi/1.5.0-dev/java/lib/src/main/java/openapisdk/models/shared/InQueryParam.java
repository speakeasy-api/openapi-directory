package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InQueryParam
 * JWT location in a query param
**/
public class InQueryParam {
    @JsonProperty("name")
    public String name;
    public InQueryParam withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InQueryParam withType(String type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPayeeListResponseCompany {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPayeeListResponseCompany withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingName")
    public String operatingName;
    public GetPayeeListResponseCompany withOperatingName(String operatingName) {
        this.operatingName = operatingName;
        return this;
    }
}
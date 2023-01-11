package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiServicesOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiServices")
    public ApiServiceOut[] apiServices;
    public ApiServicesOut withApiServices(ApiServiceOut[] apiServices) {
        this.apiServices = apiServices;
        return this;
    }
}
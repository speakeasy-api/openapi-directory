package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCompanyTimeOffTypes200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TimeOffTypeResource[] data;
    public GetCompanyTimeOffTypes200ApplicationJson withData(openapisdk.models.shared.TimeOffTypeResource[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetCompanyTimeOffTypes200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}
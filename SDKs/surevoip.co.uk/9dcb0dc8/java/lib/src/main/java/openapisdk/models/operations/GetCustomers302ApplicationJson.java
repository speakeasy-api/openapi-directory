package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCustomers302ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public GetCustomers302ApplicationJson withLocation(String location) {
        this.location = location;
        return this;
    }
}
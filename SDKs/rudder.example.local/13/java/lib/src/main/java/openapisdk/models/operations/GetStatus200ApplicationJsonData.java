package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetStatus200ApplicationJsonData
 * Status of the service
**/
public class GetStatus200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global")
    public GetStatus200ApplicationJsonDataGlobalEnum global;
    public GetStatus200ApplicationJsonData withGlobal(GetStatus200ApplicationJsonDataGlobalEnum global) {
        this.global = global;
        return this;
    }
}
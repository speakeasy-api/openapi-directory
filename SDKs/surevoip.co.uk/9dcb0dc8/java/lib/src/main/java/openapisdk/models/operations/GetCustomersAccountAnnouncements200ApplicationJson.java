package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCustomersAccountAnnouncements200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list")
    public openapisdk.models.shared.OneannouncementsPostResponses201ContentApplication1jsonSchema[] list;
    public GetCustomersAccountAnnouncements200ApplicationJson withList(openapisdk.models.shared.OneannouncementsPostResponses201ContentApplication1jsonSchema[] list) {
        this.list = list;
        return this;
    }
}
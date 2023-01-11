package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ForwardPaging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public NextPage next;
    public ForwardPaging withNext(NextPage next) {
        this.next = next;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Addresses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailing")
    public Address mailing;
    public Addresses withMailing(Address mailing) {
        this.mailing = mailing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physical")
    public Address physical;
    public Addresses withPhysical(Address physical) {
        this.physical = physical;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RackReservation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public RackReservation withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public RackReservation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public RackReservation withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("rack")
    public NestedRack rack;
    public RackReservation withRack(NestedRack rack) {
        this.rack = rack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public NestedTenant tenant;
    public RackReservation withTenant(NestedTenant tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonProperty("units")
    public Long[] units;
    public RackReservation withUnits(Long[] units) {
        this.units = units;
        return this;
    }
    @JsonProperty("user")
    public NestedUser user;
    public RackReservation withUser(NestedUser user) {
        this.user = user;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AbsenceEntitlementValueAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlement")
    public Double entitlement;
    public AbsenceEntitlementValueAttributes withEntitlement(Double entitlement) {
        this.entitlement = entitlement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AbsenceEntitlementValueAttributes withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AbsenceEntitlementValueAttributes withName(String name) {
        this.name = name;
        return this;
    }
}
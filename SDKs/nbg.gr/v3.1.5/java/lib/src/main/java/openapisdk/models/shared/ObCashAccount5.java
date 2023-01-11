package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObCashAccount5 {
    @JsonProperty("Identification")
    public String identification;
    public ObCashAccount5 withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObCashAccount5 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObCashAccount5 withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObCashAccount5 withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}
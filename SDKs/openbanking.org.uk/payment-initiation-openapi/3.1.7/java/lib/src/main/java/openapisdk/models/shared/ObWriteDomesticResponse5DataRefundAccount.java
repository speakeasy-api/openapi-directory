package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteDomesticResponse5DataRefundAccount
 * Provides the details to identify an account.
**/
public class ObWriteDomesticResponse5DataRefundAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObWriteDomesticResponse5DataRefundAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ObWriteDomesticResponse5DataRefundAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteDomesticResponse5DataRefundAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObWriteDomesticResponse5DataRefundAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}
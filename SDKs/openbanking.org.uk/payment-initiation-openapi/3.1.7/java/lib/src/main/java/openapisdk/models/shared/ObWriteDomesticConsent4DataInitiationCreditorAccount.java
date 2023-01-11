package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteDomesticConsent4DataInitiationCreditorAccount
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
public class ObWriteDomesticConsent4DataInitiationCreditorAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObWriteDomesticConsent4DataInitiationCreditorAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ObWriteDomesticConsent4DataInitiationCreditorAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteDomesticConsent4DataInitiationCreditorAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObWriteDomesticConsent4DataInitiationCreditorAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObCashAccount6
 * Unambiguous identification of the account of the creditor, in the case of a debit transaction.
**/
public class ObCashAccount6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identification")
    public String identification;
    public ObCashAccount6 withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObCashAccount6 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObCashAccount6 withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
}
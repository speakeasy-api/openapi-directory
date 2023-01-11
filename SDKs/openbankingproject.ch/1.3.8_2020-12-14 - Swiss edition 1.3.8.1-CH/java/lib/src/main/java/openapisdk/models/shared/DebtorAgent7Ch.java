package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DebtorAgent7Ch
 * Reference to an debtorAgent by either
 *   * BIC, of the debtor bank, or
 *   * IID, of the debtor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
 * 
**/
public class DebtorAgent7Ch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public DebtorAgent7Ch withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iid")
    public InstitutionalIdentification2 iid;
    public DebtorAgent7Ch withIid(InstitutionalIdentification2 iid) {
        this.iid = iid;
        return this;
    }
}
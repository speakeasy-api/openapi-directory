package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreditorAgent7Ch
 * Reference to an creditorAgent by either
 *   * BIC, of the creditor bank, or
 *   * IID, of the creditor bank, or
 *   * IID and optional name and address of the creditor bank or
 *   * Name and address of the creditor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
 * 
**/
public class CreditorAgent7Ch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostalAddress6Ch address;
    public CreditorAgent7Ch withAddress(PostalAddress6Ch address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public CreditorAgent7Ch withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iid")
    public InstitutionalIdentification2 iid;
    public CreditorAgent7Ch withIid(InstitutionalIdentification2 iid) {
        this.iid = iid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreditorAgent7Ch withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObBeneficiary5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public ObBeneficiary5 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeneficiaryType")
    public ObBeneficiaryType1CodeEnum beneficiaryType;
    public ObBeneficiary5 withBeneficiaryType(ObBeneficiaryType1CodeEnum beneficiaryType) {
        this.beneficiaryType = beneficiaryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAccount")
    public ObCashAccount5 creditorAccount;
    public ObBeneficiary5 withCreditorAccount(ObCashAccount5 creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
}
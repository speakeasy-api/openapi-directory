package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone
 * Alternative Phone Number
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlternateTelephoneNumber")
    public String alternateTelephoneNumber;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone withAlternateTelephoneNumber(String alternateTelephoneNumber) {
        this.alternateTelephoneNumber = alternateTelephoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlternateTelephoneNumberDescription")
    public String alternateTelephoneNumberDescription;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone withAlternateTelephoneNumberDescription(String alternateTelephoneNumberDescription) {
        this.alternateTelephoneNumberDescription = alternateTelephoneNumberDescription;
        return this;
    }
}
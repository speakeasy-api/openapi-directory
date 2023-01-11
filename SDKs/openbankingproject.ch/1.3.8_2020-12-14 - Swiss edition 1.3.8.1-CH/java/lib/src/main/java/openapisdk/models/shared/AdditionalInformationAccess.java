package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdditionalInformationAccess
 * Optional if supported by API provider.
 * 
 * Is asking for additional information as added within this structured object.
 * The usage of this data element requires at least one of the entries "accounts", 
 * "transactions" or "balances" also to be contained in the object. 
 * If detailed accounts are referenced, it is required in addition that any account addressed within 
 * the additionalInformation attribute is also addressed by at least one of the attributes "accounts", 
 * "transactions" or "balances".
 * 
**/
public class AdditionalInformationAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerName")
    public AccountReference16Ch[] ownerName;
    public AdditionalInformationAccess withOwnerName(AccountReference16Ch[] ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trustedBeneficiaries")
    public AccountReference16Ch[] trustedBeneficiaries;
    public AdditionalInformationAccess withTrustedBeneficiaries(AccountReference16Ch[] trustedBeneficiaries) {
        this.trustedBeneficiaries = trustedBeneficiaries;
        return this;
    }
}
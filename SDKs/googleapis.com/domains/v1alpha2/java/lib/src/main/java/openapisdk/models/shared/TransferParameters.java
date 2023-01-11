package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferParameters
 * Parameters required to transfer a domain from another registrar.
**/
public class TransferParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentRegistrar")
    public String currentRegistrar;
    public TransferParameters withCurrentRegistrar(String currentRegistrar) {
        this.currentRegistrar = currentRegistrar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentRegistrarUri")
    public String currentRegistrarUri;
    public TransferParameters withCurrentRegistrarUri(String currentRegistrarUri) {
        this.currentRegistrarUri = currentRegistrarUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public TransferParameters withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameServers")
    public String[] nameServers;
    public TransferParameters withNameServers(String[] nameServers) {
        this.nameServers = nameServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedPrivacy")
    public TransferParametersSupportedPrivacyEnum[] supportedPrivacy;
    public TransferParameters withSupportedPrivacy(TransferParametersSupportedPrivacyEnum[] supportedPrivacy) {
        this.supportedPrivacy = supportedPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferLockState")
    public TransferParametersTransferLockStateEnum transferLockState;
    public TransferParameters withTransferLockState(TransferParametersTransferLockStateEnum transferLockState) {
        this.transferLockState = transferLockState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yearlyPrice")
    public Money yearlyPrice;
    public TransferParameters withYearlyPrice(Money yearlyPrice) {
        this.yearlyPrice = yearlyPrice;
        return this;
    }
}
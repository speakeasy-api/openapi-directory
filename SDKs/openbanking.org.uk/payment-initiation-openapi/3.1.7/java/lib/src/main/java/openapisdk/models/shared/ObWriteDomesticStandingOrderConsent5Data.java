package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticStandingOrderConsent5Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteDomesticStandingOrderConsent5DataAuthorisation authorisation;
    public ObWriteDomesticStandingOrderConsent5Data withAuthorisation(ObWriteDomesticStandingOrderConsent5DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticStandingOrderConsent5DataInitiation initiation;
    public ObWriteDomesticStandingOrderConsent5Data withInitiation(ObWriteDomesticStandingOrderConsent5DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("Permission")
    public ObWriteDomesticStandingOrderConsent5DataPermissionEnum permission;
    public ObWriteDomesticStandingOrderConsent5Data withPermission(ObWriteDomesticStandingOrderConsent5DataPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum readRefundAccount;
    public ObWriteDomesticStandingOrderConsent5Data withReadRefundAccount(ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteDomesticStandingOrderConsent5Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalStandingOrderConsent6Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteInternationalStandingOrderConsent6DataAuthorisation authorisation;
    public ObWriteInternationalStandingOrderConsent6Data withAuthorisation(ObWriteInternationalStandingOrderConsent6DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalStandingOrderConsent6DataInitiation initiation;
    public ObWriteInternationalStandingOrderConsent6Data withInitiation(ObWriteInternationalStandingOrderConsent6DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("Permission")
    public ObWriteInternationalStandingOrderConsent6DataPermissionEnum permission;
    public ObWriteInternationalStandingOrderConsent6Data withPermission(ObWriteInternationalStandingOrderConsent6DataPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum readRefundAccount;
    public ObWriteInternationalStandingOrderConsent6Data withReadRefundAccount(ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteInternationalStandingOrderConsent6Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
}
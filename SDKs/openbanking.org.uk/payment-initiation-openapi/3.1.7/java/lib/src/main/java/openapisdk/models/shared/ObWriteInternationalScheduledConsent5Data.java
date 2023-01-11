package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalScheduledConsent5Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteInternationalScheduledConsent5DataAuthorisation authorisation;
    public ObWriteInternationalScheduledConsent5Data withAuthorisation(ObWriteInternationalScheduledConsent5DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalScheduledConsent5DataInitiation initiation;
    public ObWriteInternationalScheduledConsent5Data withInitiation(ObWriteInternationalScheduledConsent5DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("Permission")
    public ObWriteInternationalScheduledConsent5DataPermissionEnum permission;
    public ObWriteInternationalScheduledConsent5Data withPermission(ObWriteInternationalScheduledConsent5DataPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum readRefundAccount;
    public ObWriteInternationalScheduledConsent5Data withReadRefundAccount(ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteInternationalScheduledConsent5Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
}
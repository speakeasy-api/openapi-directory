package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticScheduledConsent4Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteDomesticScheduledConsent4DataAuthorisation authorisation;
    public ObWriteDomesticScheduledConsent4Data withAuthorisation(ObWriteDomesticScheduledConsent4DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticScheduledConsent4DataInitiation initiation;
    public ObWriteDomesticScheduledConsent4Data withInitiation(ObWriteDomesticScheduledConsent4DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("Permission")
    public ObWriteDomesticScheduledConsent4DataPermissionEnum permission;
    public ObWriteDomesticScheduledConsent4Data withPermission(ObWriteDomesticScheduledConsent4DataPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum readRefundAccount;
    public ObWriteDomesticScheduledConsent4Data withReadRefundAccount(ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteDomesticScheduledConsent4Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
}
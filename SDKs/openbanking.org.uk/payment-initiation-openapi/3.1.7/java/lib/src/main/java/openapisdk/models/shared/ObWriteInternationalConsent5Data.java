package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteInternationalConsent5Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteInternationalConsent5DataAuthorisation authorisation;
    public ObWriteInternationalConsent5Data withAuthorisation(ObWriteInternationalConsent5DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalConsent5DataInitiation initiation;
    public ObWriteInternationalConsent5Data withInitiation(ObWriteInternationalConsent5DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteInternationalConsent5DataReadRefundAccountEnum readRefundAccount;
    public ObWriteInternationalConsent5Data withReadRefundAccount(ObWriteInternationalConsent5DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteInternationalConsent5Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteDomesticConsent4Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteDomesticConsent4DataAuthorisation authorisation;
    public ObWriteDomesticConsent4Data withAuthorisation(ObWriteDomesticConsent4DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticConsent4DataInitiation initiation;
    public ObWriteDomesticConsent4Data withInitiation(ObWriteDomesticConsent4DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteDomesticConsent4DataReadRefundAccountEnum readRefundAccount;
    public ObWriteDomesticConsent4Data withReadRefundAccount(ObWriteDomesticConsent4DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteDomesticConsent4Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
}
package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateChallengeCreateChallengeRequest {
    @SpeakeasyMetadata("form:name=AuthPayload")
    public String authPayload;
    public CreateChallengeCreateChallengeRequest withAuthPayload(String authPayload) {
        this.authPayload = authPayload;
        return this;
    }
    @SpeakeasyMetadata("form:name=Details.Fields")
    public Object[] detailsFields;
    public CreateChallengeCreateChallengeRequest withDetailsFields(Object[] detailsFields) {
        this.detailsFields = detailsFields;
        return this;
    }
    @SpeakeasyMetadata("form:name=Details.Message")
    public String detailsMessage;
    public CreateChallengeCreateChallengeRequest withDetailsMessage(String detailsMessage) {
        this.detailsMessage = detailsMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=ExpirationDate")
    public OffsetDateTime expirationDate;
    public CreateChallengeCreateChallengeRequest withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=FactorSid")
    public String factorSid;
    public CreateChallengeCreateChallengeRequest withFactorSid(String factorSid) {
        this.factorSid = factorSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=HiddenDetails")
    public Object hiddenDetails;
    public CreateChallengeCreateChallengeRequest withHiddenDetails(Object hiddenDetails) {
        this.hiddenDetails = hiddenDetails;
        return this;
    }
}
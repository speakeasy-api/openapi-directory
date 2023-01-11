package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ObWriteDomesticStandingOrderConsent5DataAuthorisation
 * The authorisation type request from the TPP.
**/
public class ObWriteDomesticStandingOrderConsent5DataAuthorisation {
    @JsonProperty("AuthorisationType")
    public ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum authorisationType;
    public ObWriteDomesticStandingOrderConsent5DataAuthorisation withAuthorisationType(ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum authorisationType) {
        this.authorisationType = authorisationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionDateTime")
    public OffsetDateTime completionDateTime;
    public ObWriteDomesticStandingOrderConsent5DataAuthorisation withCompletionDateTime(OffsetDateTime completionDateTime) {
        this.completionDateTime = completionDateTime;
        return this;
    }
}
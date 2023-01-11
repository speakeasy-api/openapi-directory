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
 * ObWriteDomesticScheduledConsentResponse5DataAuthorisation
 * The authorisation type request from the TPP.
**/
public class ObWriteDomesticScheduledConsentResponse5DataAuthorisation {
    @JsonProperty("AuthorisationType")
    public ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum authorisationType;
    public ObWriteDomesticScheduledConsentResponse5DataAuthorisation withAuthorisationType(ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum authorisationType) {
        this.authorisationType = authorisationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionDateTime")
    public OffsetDateTime completionDateTime;
    public ObWriteDomesticScheduledConsentResponse5DataAuthorisation withCompletionDateTime(OffsetDateTime completionDateTime) {
        this.completionDateTime = completionDateTime;
        return this;
    }
}
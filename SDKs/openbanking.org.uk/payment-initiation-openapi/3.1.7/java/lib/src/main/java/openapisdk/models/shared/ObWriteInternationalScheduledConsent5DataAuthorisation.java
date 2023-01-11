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
 * ObWriteInternationalScheduledConsent5DataAuthorisation
 * The authorisation type request from the TPP.
**/
public class ObWriteInternationalScheduledConsent5DataAuthorisation {
    @JsonProperty("AuthorisationType")
    public ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum authorisationType;
    public ObWriteInternationalScheduledConsent5DataAuthorisation withAuthorisationType(ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum authorisationType) {
        this.authorisationType = authorisationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionDateTime")
    public OffsetDateTime completionDateTime;
    public ObWriteInternationalScheduledConsent5DataAuthorisation withCompletionDateTime(OffsetDateTime completionDateTime) {
        this.completionDateTime = completionDateTime;
        return this;
    }
}
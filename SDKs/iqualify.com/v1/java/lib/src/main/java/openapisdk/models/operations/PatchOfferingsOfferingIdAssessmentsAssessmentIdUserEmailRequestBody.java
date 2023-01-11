package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dueDate")
    public OffsetDateTime dueDate;
    public PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody withDueDate(OffsetDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }
}
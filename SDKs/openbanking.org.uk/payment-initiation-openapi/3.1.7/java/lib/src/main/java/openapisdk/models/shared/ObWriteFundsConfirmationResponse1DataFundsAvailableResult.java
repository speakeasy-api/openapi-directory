package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ObWriteFundsConfirmationResponse1DataFundsAvailableResult
 * Result of a funds availability check.
**/
public class ObWriteFundsConfirmationResponse1DataFundsAvailableResult {
    @JsonProperty("FundsAvailable")
    public Boolean fundsAvailable;
    public ObWriteFundsConfirmationResponse1DataFundsAvailableResult withFundsAvailable(Boolean fundsAvailable) {
        this.fundsAvailable = fundsAvailable;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("FundsAvailableDateTime")
    public OffsetDateTime fundsAvailableDateTime;
    public ObWriteFundsConfirmationResponse1DataFundsAvailableResult withFundsAvailableDateTime(OffsetDateTime fundsAvailableDateTime) {
        this.fundsAvailableDateTime = fundsAvailableDateTime;
        return this;
    }
}
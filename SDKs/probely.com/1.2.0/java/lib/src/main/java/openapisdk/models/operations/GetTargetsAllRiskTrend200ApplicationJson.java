package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetTargetsAllRiskTrend200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("0")
    public OffsetDateTime zero;
    public GetTargetsAllRiskTrend200ApplicationJson withZero(OffsetDateTime zero) {
        this.zero = zero;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("1")
    public Long one;
    public GetTargetsAllRiskTrend200ApplicationJson withOne(Long one) {
        this.one = one;
        return this;
    }
}
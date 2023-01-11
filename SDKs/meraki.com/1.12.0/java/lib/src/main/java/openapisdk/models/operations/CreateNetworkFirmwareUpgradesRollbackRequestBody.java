package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateNetworkFirmwareUpgradesRollbackRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum product;
    public CreateNetworkFirmwareUpgradesRollbackRequestBody withProduct(CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum product) {
        this.product = product;
        return this;
    }
    @JsonProperty("reasons")
    public CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[] reasons;
    public CreateNetworkFirmwareUpgradesRollbackRequestBody withReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("time")
    public OffsetDateTime time;
    public CreateNetworkFirmwareUpgradesRollbackRequestBody withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toVersion")
    public CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion toVersion;
    public CreateNetworkFirmwareUpgradesRollbackRequestBody withToVersion(CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion toVersion) {
        this.toVersion = toVersion;
        return this;
    }
}
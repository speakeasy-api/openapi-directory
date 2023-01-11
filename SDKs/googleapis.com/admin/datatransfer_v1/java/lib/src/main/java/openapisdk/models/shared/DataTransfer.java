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
 * DataTransfer
 * A Transfer resource represents the transfer of the ownership of user data between users.
**/
public class DataTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationDataTransfers")
    public ApplicationDataTransfer[] applicationDataTransfers;
    public DataTransfer withApplicationDataTransfers(ApplicationDataTransfer[] applicationDataTransfers) {
        this.applicationDataTransfers = applicationDataTransfers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DataTransfer withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DataTransfer withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DataTransfer withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newOwnerUserId")
    public String newOwnerUserId;
    public DataTransfer withNewOwnerUserId(String newOwnerUserId) {
        this.newOwnerUserId = newOwnerUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldOwnerUserId")
    public String oldOwnerUserId;
    public DataTransfer withOldOwnerUserId(String oldOwnerUserId) {
        this.oldOwnerUserId = oldOwnerUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overallTransferStatusCode")
    public String overallTransferStatusCode;
    public DataTransfer withOverallTransferStatusCode(String overallTransferStatusCode) {
        this.overallTransferStatusCode = overallTransferStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestTime")
    public OffsetDateTime requestTime;
    public DataTransfer withRequestTime(OffsetDateTime requestTime) {
        this.requestTime = requestTime;
        return this;
    }
}
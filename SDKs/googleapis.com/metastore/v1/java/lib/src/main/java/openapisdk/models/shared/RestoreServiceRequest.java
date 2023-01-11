package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestoreServiceRequest
 * Request message for DataprocMetastore.Restore.
**/
public class RestoreServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backup")
    public String backup;
    public RestoreServiceRequest withBackup(String backup) {
        this.backup = backup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public RestoreServiceRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreType")
    public RestoreServiceRequestRestoreTypeEnum restoreType;
    public RestoreServiceRequest withRestoreType(RestoreServiceRequestRestoreTypeEnum restoreType) {
        this.restoreType = restoreType;
        return this;
    }
}
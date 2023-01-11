package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlExternalSyncSettingError
 * External primary instance migration setting error/warning.
**/
public class SqlExternalSyncSettingError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public SqlExternalSyncSettingError withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SqlExternalSyncSettingError withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SqlExternalSyncSettingErrorTypeEnum type;
    public SqlExternalSyncSettingError withType(SqlExternalSyncSettingErrorTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlInstancesVerifyExternalSyncSettingsResponse
 * Instance verify external sync settings response.
**/
public class SqlInstancesVerifyExternalSyncSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public SqlExternalSyncSettingError[] errors;
    public SqlInstancesVerifyExternalSyncSettingsResponse withErrors(SqlExternalSyncSettingError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SqlInstancesVerifyExternalSyncSettingsResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public SqlExternalSyncSettingError[] warnings;
    public SqlInstancesVerifyExternalSyncSettingsResponse withWarnings(SqlExternalSyncSettingError[] warnings) {
        this.warnings = warnings;
        return this;
    }
}
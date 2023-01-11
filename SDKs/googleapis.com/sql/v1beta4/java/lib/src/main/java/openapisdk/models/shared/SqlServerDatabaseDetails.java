package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlServerDatabaseDetails
 * Represents a Sql Server database on the Cloud SQL instance.
**/
public class SqlServerDatabaseDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibilityLevel")
    public Integer compatibilityLevel;
    public SqlServerDatabaseDetails withCompatibilityLevel(Integer compatibilityLevel) {
        this.compatibilityLevel = compatibilityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recoveryModel")
    public String recoveryModel;
    public SqlServerDatabaseDetails withRecoveryModel(String recoveryModel) {
        this.recoveryModel = recoveryModel;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudSqlConnectionProfileInput
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
public class CloudSqlConnectionProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CloudSqlSettingsInput settings;
    public CloudSqlConnectionProfileInput withSettings(CloudSqlSettingsInput settings) {
        this.settings = settings;
        return this;
    }
}
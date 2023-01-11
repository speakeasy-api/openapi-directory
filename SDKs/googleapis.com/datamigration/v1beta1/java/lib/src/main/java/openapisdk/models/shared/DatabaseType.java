package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseType
 * A message defining the database engine and provider.
**/
public class DatabaseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public DatabaseTypeEngineEnum engine;
    public DatabaseType withEngine(DatabaseTypeEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public DatabaseTypeProviderEnum provider;
    public DatabaseType withProvider(DatabaseTypeProviderEnum provider) {
        this.provider = provider;
        return this;
    }
}
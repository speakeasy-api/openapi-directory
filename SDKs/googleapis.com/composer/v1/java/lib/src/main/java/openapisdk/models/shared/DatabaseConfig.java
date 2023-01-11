package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseConfig
 * The configuration of Cloud SQL instance that is used by the Apache Airflow software.
**/
public class DatabaseConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public DatabaseConfig withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
}
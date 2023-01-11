package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SupportedRuntimeFeatures
 * Supported runtime features of a connector version. This is passed to the management layer to add a new connector version by the connector developer. Details about how this proto is passed to the management layer is covered in this doc - go/runtime-manifest.
**/
public class SupportedRuntimeFeatures {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionApis")
    public Boolean actionApis;
    public SupportedRuntimeFeatures withActionApis(Boolean actionApis) {
        this.actionApis = actionApis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityApis")
    public Boolean entityApis;
    public SupportedRuntimeFeatures withEntityApis(Boolean entityApis) {
        this.entityApis = entityApis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqlQuery")
    public Boolean sqlQuery;
    public SupportedRuntimeFeatures withSqlQuery(Boolean sqlQuery) {
        this.sqlQuery = sqlQuery;
        return this;
    }
}
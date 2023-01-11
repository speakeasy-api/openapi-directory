package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PigJob
 * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
**/
public class PigJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continueOnFailure")
    public Boolean continueOnFailure;
    public PigJob withContinueOnFailure(Boolean continueOnFailure) {
        this.continueOnFailure = continueOnFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jarFileUris")
    public String[] jarFileUris;
    public PigJob withJarFileUris(String[] jarFileUris) {
        this.jarFileUris = jarFileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public PigJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public PigJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFileUri")
    public String queryFileUri;
    public PigJob withQueryFileUri(String queryFileUri) {
        this.queryFileUri = queryFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryList")
    public QueryList queryList;
    public PigJob withQueryList(QueryList queryList) {
        this.queryList = queryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptVariables")
    public java.util.Map<String, String> scriptVariables;
    public PigJob withScriptVariables(java.util.Map<String, String> scriptVariables) {
        this.scriptVariables = scriptVariables;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HiveJob
 * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
**/
public class HiveJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continueOnFailure")
    public Boolean continueOnFailure;
    public HiveJob withContinueOnFailure(Boolean continueOnFailure) {
        this.continueOnFailure = continueOnFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jarFileUris")
    public String[] jarFileUris;
    public HiveJob withJarFileUris(String[] jarFileUris) {
        this.jarFileUris = jarFileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public HiveJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFileUri")
    public String queryFileUri;
    public HiveJob withQueryFileUri(String queryFileUri) {
        this.queryFileUri = queryFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryList")
    public QueryList queryList;
    public HiveJob withQueryList(QueryList queryList) {
        this.queryList = queryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptVariables")
    public java.util.Map<String, String> scriptVariables;
    public HiveJob withScriptVariables(java.util.Map<String, String> scriptVariables) {
        this.scriptVariables = scriptVariables;
        return this;
    }
}
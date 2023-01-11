package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkCheckRequest
 * Message used to check for the existence of multiple digital asset links within a single RPC.
**/
public class BulkCheckRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowGoogleInternalDataSources")
    public Boolean allowGoogleInternalDataSources;
    public BulkCheckRequest withAllowGoogleInternalDataSources(Boolean allowGoogleInternalDataSources) {
        this.allowGoogleInternalDataSources = allowGoogleInternalDataSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultRelation")
    public String defaultRelation;
    public BulkCheckRequest withDefaultRelation(String defaultRelation) {
        this.defaultRelation = defaultRelation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultSource")
    public Asset defaultSource;
    public BulkCheckRequest withDefaultSource(Asset defaultSource) {
        this.defaultSource = defaultSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTarget")
    public Asset defaultTarget;
    public BulkCheckRequest withDefaultTarget(Asset defaultTarget) {
        this.defaultTarget = defaultTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipCacheLookup")
    public Boolean skipCacheLookup;
    public BulkCheckRequest withSkipCacheLookup(Boolean skipCacheLookup) {
        this.skipCacheLookup = skipCacheLookup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statements")
    public StatementTemplate[] statements;
    public BulkCheckRequest withStatements(StatementTemplate[] statements) {
        this.statements = statements;
        return this;
    }
}
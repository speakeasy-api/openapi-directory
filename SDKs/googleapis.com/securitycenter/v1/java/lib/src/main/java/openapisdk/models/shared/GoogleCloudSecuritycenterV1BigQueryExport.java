package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1BigQueryExport
 * Configures how to deliver Findings to BigQuery Instance.
**/
public class GoogleCloudSecuritycenterV1BigQueryExport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudSecuritycenterV1BigQueryExport withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public String dataset;
    public GoogleCloudSecuritycenterV1BigQueryExport withDataset(String dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudSecuritycenterV1BigQueryExport withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudSecuritycenterV1BigQueryExport withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mostRecentEditor")
    public String mostRecentEditor;
    public GoogleCloudSecuritycenterV1BigQueryExport withMostRecentEditor(String mostRecentEditor) {
        this.mostRecentEditor = mostRecentEditor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1BigQueryExport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public GoogleCloudSecuritycenterV1BigQueryExport withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudSecuritycenterV1BigQueryExport withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}
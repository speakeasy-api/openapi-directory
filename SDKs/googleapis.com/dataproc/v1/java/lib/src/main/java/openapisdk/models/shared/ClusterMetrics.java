package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterMetrics
 * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
public class ClusterMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hdfsMetrics")
    public java.util.Map<String, String> hdfsMetrics;
    public ClusterMetrics withHdfsMetrics(java.util.Map<String, String> hdfsMetrics) {
        this.hdfsMetrics = hdfsMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yarnMetrics")
    public java.util.Map<String, String> yarnMetrics;
    public ClusterMetrics withYarnMetrics(java.util.Map<String, String> yarnMetrics) {
        this.yarnMetrics = yarnMetrics;
        return this;
    }
}
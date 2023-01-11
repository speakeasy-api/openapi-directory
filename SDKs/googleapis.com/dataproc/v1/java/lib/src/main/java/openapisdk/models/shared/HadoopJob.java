package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HadoopJob
 * A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
**/
public class HadoopJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveUris")
    public String[] archiveUris;
    public HadoopJob withArchiveUris(String[] archiveUris) {
        this.archiveUris = archiveUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public HadoopJob withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUris")
    public String[] fileUris;
    public HadoopJob withFileUris(String[] fileUris) {
        this.fileUris = fileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jarFileUris")
    public String[] jarFileUris;
    public HadoopJob withJarFileUris(String[] jarFileUris) {
        this.jarFileUris = jarFileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public HadoopJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainClass")
    public String mainClass;
    public HadoopJob withMainClass(String mainClass) {
        this.mainClass = mainClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainJarFileUri")
    public String mainJarFileUri;
    public HadoopJob withMainJarFileUri(String mainJarFileUri) {
        this.mainJarFileUri = mainJarFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public HadoopJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
}
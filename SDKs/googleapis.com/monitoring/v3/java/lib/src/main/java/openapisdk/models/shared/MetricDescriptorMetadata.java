package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricDescriptorMetadata
 * Additional annotations that can be used to guide the usage of a metric.
**/
public class MetricDescriptorMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingestDelay")
    public String ingestDelay;
    public MetricDescriptorMetadata withIngestDelay(String ingestDelay) {
        this.ingestDelay = ingestDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public MetricDescriptorMetadataLaunchStageEnum launchStage;
    public MetricDescriptorMetadata withLaunchStage(MetricDescriptorMetadataLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplePeriod")
    public String samplePeriod;
    public MetricDescriptorMetadata withSamplePeriod(String samplePeriod) {
        this.samplePeriod = samplePeriod;
        return this;
    }
}
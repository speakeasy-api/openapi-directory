package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageOccurrence
 * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
**/
public class ImageOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseResourceUrl")
    public String baseResourceUrl;
    public ImageOccurrence withBaseResourceUrl(String baseResourceUrl) {
        this.baseResourceUrl = baseResourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Integer distance;
    public ImageOccurrence withDistance(Integer distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public Fingerprint fingerprint;
    public ImageOccurrence withFingerprint(Fingerprint fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerInfo")
    public Layer[] layerInfo;
    public ImageOccurrence withLayerInfo(Layer[] layerInfo) {
        this.layerInfo = layerInfo;
        return this;
    }
}
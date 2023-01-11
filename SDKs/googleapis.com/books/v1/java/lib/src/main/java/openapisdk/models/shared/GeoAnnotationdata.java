package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GeoAnnotationdata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationType")
    public String annotationType;
    public GeoAnnotationdata withAnnotationType(String annotationType) {
        this.annotationType = annotationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Geolayerdata data;
    public GeoAnnotationdata withData(Geolayerdata data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedData")
    public String encodedData;
    public GeoAnnotationdata withEncodedData(String encodedData) {
        this.encodedData = encodedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GeoAnnotationdata withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GeoAnnotationdata withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerId")
    public String layerId;
    public GeoAnnotationdata withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public GeoAnnotationdata withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public GeoAnnotationdata withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public GeoAnnotationdata withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
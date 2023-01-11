package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictionaryAnnotationdata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationType")
    public String annotationType;
    public DictionaryAnnotationdata withAnnotationType(String annotationType) {
        this.annotationType = annotationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Dictlayerdata data;
    public DictionaryAnnotationdata withData(Dictlayerdata data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedData")
    public String encodedData;
    public DictionaryAnnotationdata withEncodedData(String encodedData) {
        this.encodedData = encodedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DictionaryAnnotationdata withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DictionaryAnnotationdata withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerId")
    public String layerId;
    public DictionaryAnnotationdata withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public DictionaryAnnotationdata withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public DictionaryAnnotationdata withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public DictionaryAnnotationdata withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
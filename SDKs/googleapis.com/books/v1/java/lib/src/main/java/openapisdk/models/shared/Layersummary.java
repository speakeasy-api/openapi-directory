package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Layersummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationCount")
    public Integer annotationCount;
    public Layersummary withAnnotationCount(Integer annotationCount) {
        this.annotationCount = annotationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationTypes")
    public String[] annotationTypes;
    public Layersummary withAnnotationTypes(String[] annotationTypes) {
        this.annotationTypes = annotationTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationsDataLink")
    public String annotationsDataLink;
    public Layersummary withAnnotationsDataLink(String annotationsDataLink) {
        this.annotationsDataLink = annotationsDataLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationsLink")
    public String annotationsLink;
    public Layersummary withAnnotationsLink(String annotationsLink) {
        this.annotationsLink = annotationsLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentVersion")
    public String contentVersion;
    public Layersummary withContentVersion(String contentVersion) {
        this.contentVersion = contentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataCount")
    public Integer dataCount;
    public Layersummary withDataCount(Integer dataCount) {
        this.dataCount = dataCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Layersummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Layersummary withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerId")
    public String layerId;
    public Layersummary withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Layersummary withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public Layersummary withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeAnnotationsVersion")
    public String volumeAnnotationsVersion;
    public Layersummary withVolumeAnnotationsVersion(String volumeAnnotationsVersion) {
        this.volumeAnnotationsVersion = volumeAnnotationsVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public Layersummary withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
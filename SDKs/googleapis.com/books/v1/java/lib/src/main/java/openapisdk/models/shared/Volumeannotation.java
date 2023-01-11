package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Volumeannotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationDataId")
    public String annotationDataId;
    public Volumeannotation withAnnotationDataId(String annotationDataId) {
        this.annotationDataId = annotationDataId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationDataLink")
    public String annotationDataLink;
    public Volumeannotation withAnnotationDataLink(String annotationDataLink) {
        this.annotationDataLink = annotationDataLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationType")
    public String annotationType;
    public Volumeannotation withAnnotationType(String annotationType) {
        this.annotationType = annotationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentRanges")
    public VolumeannotationContentRanges contentRanges;
    public Volumeannotation withContentRanges(VolumeannotationContentRanges contentRanges) {
        this.contentRanges = contentRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public Volumeannotation withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Volumeannotation withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Volumeannotation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Volumeannotation withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerId")
    public String layerId;
    public Volumeannotation withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageIds")
    public String[] pageIds;
    public Volumeannotation withPageIds(String[] pageIds) {
        this.pageIds = pageIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedText")
    public String selectedText;
    public Volumeannotation withSelectedText(String selectedText) {
        this.selectedText = selectedText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Volumeannotation withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public Volumeannotation withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public Volumeannotation withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
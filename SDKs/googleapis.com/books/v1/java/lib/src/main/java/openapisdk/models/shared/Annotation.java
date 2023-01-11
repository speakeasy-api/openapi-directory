package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Annotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterSelectedText")
    public String afterSelectedText;
    public Annotation withAfterSelectedText(String afterSelectedText) {
        this.afterSelectedText = afterSelectedText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeSelectedText")
    public String beforeSelectedText;
    public Annotation withBeforeSelectedText(String beforeSelectedText) {
        this.beforeSelectedText = beforeSelectedText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientVersionRanges")
    public AnnotationClientVersionRanges clientVersionRanges;
    public Annotation withClientVersionRanges(AnnotationClientVersionRanges clientVersionRanges) {
        this.clientVersionRanges = clientVersionRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public Annotation withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentVersionRanges")
    public AnnotationCurrentVersionRanges currentVersionRanges;
    public Annotation withCurrentVersionRanges(AnnotationCurrentVersionRanges currentVersionRanges) {
        this.currentVersionRanges = currentVersionRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public Annotation withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Annotation withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlightStyle")
    public String highlightStyle;
    public Annotation withHighlightStyle(String highlightStyle) {
        this.highlightStyle = highlightStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Annotation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Annotation withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerId")
    public String layerId;
    public Annotation withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerSummary")
    public AnnotationLayerSummary layerSummary;
    public Annotation withLayerSummary(AnnotationLayerSummary layerSummary) {
        this.layerSummary = layerSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageIds")
    public String[] pageIds;
    public Annotation withPageIds(String[] pageIds) {
        this.pageIds = pageIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedText")
    public String selectedText;
    public Annotation withSelectedText(String selectedText) {
        this.selectedText = selectedText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Annotation withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public Annotation withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public Annotation withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
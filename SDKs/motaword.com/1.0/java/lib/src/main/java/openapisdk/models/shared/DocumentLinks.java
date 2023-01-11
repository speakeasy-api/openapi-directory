package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admins")
    public java.util.Map<String, Href> admins;
    public DocumentLinks withAdmins(java.util.Map<String, Href> admins) {
        this.admins = admins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Href download;
    public DocumentLinks withDownload(Href download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editors")
    public java.util.Map<String, Href> editors;
    public DocumentLinks withEditors(java.util.Map<String, Href> editors) {
        this.editors = editors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview-box")
    public Href previewBox;
    public DocumentLinks withPreviewBox(Href previewBox) {
        this.previewBox = previewBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview-pdf")
    public Href previewPdf;
    public DocumentLinks withPreviewPdf(Href previewPdf) {
        this.previewPdf = previewPdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview-pdf-viewer")
    public Href previewPdfViewer;
    public DocumentLinks withPreviewPdfViewer(Href previewPdfViewer) {
        this.previewPdfViewer = previewPdfViewer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public Href project;
    public DocumentLinks withProject(Href project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Href self;
    public DocumentLinks withSelf(Href self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public Href thumbnail;
    public DocumentLinks withThumbnail(Href thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
}
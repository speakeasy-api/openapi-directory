package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Document {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_type")
    public String fileType;
    public Document withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_custom_package")
    public Boolean hasCustomPackage;
    public Document withHasCustomPackage(Boolean hasCustomPackage) {
        this.hasCustomPackage = hasCustomPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Document withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public DocumentLinks links;
    public Document withLinks(DocumentLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manual_files")
    public ManualFile[] manualFiles;
    public Document withManualFiles(ManualFile[] manualFiles) {
        this.manualFiles = manualFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Document withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_id")
    public Long projectId;
    public Document withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_in_manual_editor")
    public Boolean reviewInManualEditor;
    public Document withReviewInManualEditor(Boolean reviewInManualEditor) {
        this.reviewInManualEditor = reviewInManualEditor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public java.util.Map<String, Object> scheme;
    public Document withScheme(java.util.Map<String, Object> scheme) {
        this.scheme = scheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_score")
    public Float searchScore;
    public Document withSearchScore(Float searchScore) {
        this.searchScore = searchScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_language")
    public String sourceLanguage;
    public Document withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public Document withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_languages")
    public String[] targetLanguages;
    public Document withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploaded_at")
    public Long uploadedAt;
    public Document withUploadedAt(Long uploadedAt) {
        this.uploadedAt = uploadedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("word_count")
    public Long wordCount;
    public Document withWordCount(Long wordCount) {
        this.wordCount = wordCount;
        return this;
    }
}
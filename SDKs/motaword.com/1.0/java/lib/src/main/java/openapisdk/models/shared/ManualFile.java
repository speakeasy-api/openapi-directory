package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManualFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFileId")
    public Long driveFileId;
    public ManualFile withDriveFileId(Long driveFileId) {
        this.driveFileId = driveFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isProofread")
    public Boolean isProofread;
    public ManualFile withIsProofread(Boolean isProofread) {
        this.isProofread = isProofread;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTranslated")
    public Boolean isTranslated;
    public ManualFile withIsTranslated(Boolean isTranslated) {
        this.isTranslated = isTranslated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public ManualFile withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proofreadingFileId")
    public Long proofreadingFileId;
    public ManualFile withProofreadingFileId(Long proofreadingFileId) {
        this.proofreadingFileId = proofreadingFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translationFileId")
    public Long translationFileId;
    public ManualFile withTranslationFileId(Long translationFileId) {
        this.translationFileId = translationFileId;
        return this;
    }
}
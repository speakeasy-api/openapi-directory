package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReadingPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epubCfiPosition")
    public String epubCfiPosition;
    public ReadingPosition withEpubCfiPosition(String epubCfiPosition) {
        this.epubCfiPosition = epubCfiPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbImagePosition")
    public String gbImagePosition;
    public ReadingPosition withGbImagePosition(String gbImagePosition) {
        this.gbImagePosition = gbImagePosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbTextPosition")
    public String gbTextPosition;
    public ReadingPosition withGbTextPosition(String gbTextPosition) {
        this.gbTextPosition = gbTextPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ReadingPosition withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdfPosition")
    public String pdfPosition;
    public ReadingPosition withPdfPosition(String pdfPosition) {
        this.pdfPosition = pdfPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public ReadingPosition withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public ReadingPosition withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}
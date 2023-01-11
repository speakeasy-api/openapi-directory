package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfMetadataDto
 * Enter meta data for pdf document
**/
public class PdfMetadataDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Author")
    public String author;
    public PdfMetadataDto withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableAdd")
    public Boolean enableAdd;
    public PdfMetadataDto withEnableAdd(Boolean enableAdd) {
        this.enableAdd = enableAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableCopy")
    public Boolean enableCopy;
    public PdfMetadataDto withEnableCopy(Boolean enableCopy) {
        this.enableCopy = enableCopy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableModify")
    public Boolean enableModify;
    public PdfMetadataDto withEnableModify(Boolean enableModify) {
        this.enableModify = enableModify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnablePrinting")
    public Boolean enablePrinting;
    public PdfMetadataDto withEnablePrinting(Boolean enablePrinting) {
        this.enablePrinting = enablePrinting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keywords")
    public String[] keywords;
    public PdfMetadataDto withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerPassword")
    public String ownerPassword;
    public PdfMetadataDto withOwnerPassword(String ownerPassword) {
        this.ownerPassword = ownerPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subject")
    public String subject;
    public PdfMetadataDto withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public PdfMetadataDto withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPassword")
    public String userPassword;
    public PdfMetadataDto withUserPassword(String userPassword) {
        this.userPassword = userPassword;
        return this;
    }
}
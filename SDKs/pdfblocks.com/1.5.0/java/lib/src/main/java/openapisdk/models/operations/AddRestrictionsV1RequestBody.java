package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddRestrictionsV1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=allow_accessibility")
    public Boolean allowAccessibility;
    public AddRestrictionsV1RequestBody withAllowAccessibility(Boolean allowAccessibility) {
        this.allowAccessibility = allowAccessibility;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allow_assemble_document")
    public Boolean allowAssembleDocument;
    public AddRestrictionsV1RequestBody withAllowAssembleDocument(Boolean allowAssembleDocument) {
        this.allowAssembleDocument = allowAssembleDocument;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allow_change_content")
    public Boolean allowChangeContent;
    public AddRestrictionsV1RequestBody withAllowChangeContent(Boolean allowChangeContent) {
        this.allowChangeContent = allowChangeContent;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allow_comment_and_fill_form")
    public Boolean allowCommentAndFillForm;
    public AddRestrictionsV1RequestBody withAllowCommentAndFillForm(Boolean allowCommentAndFillForm) {
        this.allowCommentAndFillForm = allowCommentAndFillForm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allow_copy_content")
    public Boolean allowCopyContent;
    public AddRestrictionsV1RequestBody withAllowCopyContent(Boolean allowCopyContent) {
        this.allowCopyContent = allowCopyContent;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allow_fill_form")
    public Boolean allowFillForm;
    public AddRestrictionsV1RequestBody withAllowFillForm(Boolean allowFillForm) {
        this.allowFillForm = allowFillForm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allow_print")
    public Boolean allowPrint;
    public AddRestrictionsV1RequestBody withAllowPrint(Boolean allowPrint) {
        this.allowPrint = allowPrint;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=allow_print_high_resolution")
    public Boolean allowPrintHighResolution;
    public AddRestrictionsV1RequestBody withAllowPrintHighResolution(Boolean allowPrintHighResolution) {
        this.allowPrintHighResolution = allowPrintHighResolution;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=encryption_algorithm")
    public AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum encryptionAlgorithm;
    public AddRestrictionsV1RequestBody withEncryptionAlgorithm(AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum encryptionAlgorithm) {
        this.encryptionAlgorithm = encryptionAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public AddRestrictionsV1RequestBodyFile file;
    public AddRestrictionsV1RequestBody withFile(AddRestrictionsV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=owner_password")
    public String ownerPassword;
    public AddRestrictionsV1RequestBody withOwnerPassword(String ownerPassword) {
        this.ownerPassword = ownerPassword;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_password")
    public String userPassword;
    public AddRestrictionsV1RequestBody withUserPassword(String userPassword) {
        this.userPassword = userPassword;
        return this;
    }
}
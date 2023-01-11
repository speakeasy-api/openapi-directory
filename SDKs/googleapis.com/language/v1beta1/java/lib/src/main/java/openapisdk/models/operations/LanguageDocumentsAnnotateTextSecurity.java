package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnnotateTextSecurity {
    @SpeakeasyMetadata("security:option=true")
    public LanguageDocumentsAnnotateTextSecurityOption1 option1;
    public LanguageDocumentsAnnotateTextSecurity withOption1(LanguageDocumentsAnnotateTextSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public LanguageDocumentsAnnotateTextSecurityOption2 option2;
    public LanguageDocumentsAnnotateTextSecurity withOption2(LanguageDocumentsAnnotateTextSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}
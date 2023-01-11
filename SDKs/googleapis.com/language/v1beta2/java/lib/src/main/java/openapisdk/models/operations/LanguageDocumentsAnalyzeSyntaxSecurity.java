package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnalyzeSyntaxSecurity {
    @SpeakeasyMetadata("security:option=true")
    public LanguageDocumentsAnalyzeSyntaxSecurityOption1 option1;
    public LanguageDocumentsAnalyzeSyntaxSecurity withOption1(LanguageDocumentsAnalyzeSyntaxSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public LanguageDocumentsAnalyzeSyntaxSecurityOption2 option2;
    public LanguageDocumentsAnalyzeSyntaxSecurity withOption2(LanguageDocumentsAnalyzeSyntaxSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}
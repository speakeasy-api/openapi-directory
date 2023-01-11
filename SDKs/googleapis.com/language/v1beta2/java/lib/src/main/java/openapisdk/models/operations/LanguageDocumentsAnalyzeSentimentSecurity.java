package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDocumentsAnalyzeSentimentSecurity {
    @SpeakeasyMetadata("security:option=true")
    public LanguageDocumentsAnalyzeSentimentSecurityOption1 option1;
    public LanguageDocumentsAnalyzeSentimentSecurity withOption1(LanguageDocumentsAnalyzeSentimentSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public LanguageDocumentsAnalyzeSentimentSecurityOption2 option2;
    public LanguageDocumentsAnalyzeSentimentSecurity withOption2(LanguageDocumentsAnalyzeSentimentSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}
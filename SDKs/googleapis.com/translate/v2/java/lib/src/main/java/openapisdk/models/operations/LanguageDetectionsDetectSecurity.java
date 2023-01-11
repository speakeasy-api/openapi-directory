package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDetectionsDetectSecurity {
    @SpeakeasyMetadata("security:option=true")
    public LanguageDetectionsDetectSecurityOption1 option1;
    public LanguageDetectionsDetectSecurity withOption1(LanguageDetectionsDetectSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public LanguageDetectionsDetectSecurityOption2 option2;
    public LanguageDetectionsDetectSecurity withOption2(LanguageDetectionsDetectSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}
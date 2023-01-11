package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageTranslationsTranslateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public LanguageTranslationsTranslateSecurityOption1 option1;
    public LanguageTranslationsTranslateSecurity withOption1(LanguageTranslationsTranslateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public LanguageTranslationsTranslateSecurityOption2 option2;
    public LanguageTranslationsTranslateSecurity withOption2(LanguageTranslationsTranslateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}
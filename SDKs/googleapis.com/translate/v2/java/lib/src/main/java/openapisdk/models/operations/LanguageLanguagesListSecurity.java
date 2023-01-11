package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageLanguagesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public LanguageLanguagesListSecurityOption1 option1;
    public LanguageLanguagesListSecurity withOption1(LanguageLanguagesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public LanguageLanguagesListSecurityOption2 option2;
    public LanguageLanguagesListSecurity withOption2(LanguageLanguagesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}
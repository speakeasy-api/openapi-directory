package openapisdk.models.shared;



public class FrontendSettingsLanguage {
    public FrontendSettingsLanguageSource source;
    public FrontendSettingsLanguage withSource(FrontendSettingsLanguageSource source) {
        this.source = source;
        return this;
    }
    public FrontendSettingsLanguageTarget target;
    public FrontendSettingsLanguage withTarget(FrontendSettingsLanguageTarget target) {
        this.target = target;
        return this;
    }
}
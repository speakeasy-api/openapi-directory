package openapisdk.models.shared;



public class FrontendSettings {
    public Long charLimit;
    public FrontendSettings withCharLimit(Long charLimit) {
        this.charLimit = charLimit;
        return this;
    }
    public Long frontendTimeout;
    public FrontendSettings withFrontendTimeout(Long frontendTimeout) {
        this.frontendTimeout = frontendTimeout;
        return this;
    }
    public FrontendSettingsLanguage language;
    public FrontendSettings withLanguage(FrontendSettingsLanguage language) {
        this.language = language;
        return this;
    }
}
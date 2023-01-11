package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateSitesealGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public CertificateSitesealGetQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=theme")
    public CertificateSitesealGetThemeEnum theme;
    public CertificateSitesealGetQueryParams withTheme(CertificateSitesealGetThemeEnum theme) {
        this.theme = theme;
        return this;
    }
}
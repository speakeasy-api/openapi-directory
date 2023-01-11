package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BrandingConf {
    @JsonProperty("barColor")
    public Color barColor;
    public BrandingConf withBarColor(Color barColor) {
        this.barColor = barColor;
        return this;
    }
    @JsonProperty("displayBar")
    public Boolean displayBar;
    public BrandingConf withDisplayBar(Boolean displayBar) {
        this.displayBar = displayBar;
        return this;
    }
    @JsonProperty("displayBarLogin")
    public Boolean displayBarLogin;
    public BrandingConf withDisplayBarLogin(Boolean displayBarLogin) {
        this.displayBarLogin = displayBarLogin;
        return this;
    }
    @JsonProperty("displayLabel")
    public Boolean displayLabel;
    public BrandingConf withDisplayLabel(Boolean displayLabel) {
        this.displayLabel = displayLabel;
        return this;
    }
    @JsonProperty("displayMotd")
    public Boolean displayMotd;
    public BrandingConf withDisplayMotd(Boolean displayMotd) {
        this.displayMotd = displayMotd;
        return this;
    }
    @JsonProperty("labelColor")
    public Color labelColor;
    public BrandingConf withLabelColor(Color labelColor) {
        this.labelColor = labelColor;
        return this;
    }
    @JsonProperty("labelText")
    public String labelText;
    public BrandingConf withLabelText(String labelText) {
        this.labelText = labelText;
        return this;
    }
    @JsonProperty("motd")
    public String motd;
    public BrandingConf withMotd(String motd) {
        this.motd = motd;
        return this;
    }
    @JsonProperty("smallLogo")
    public Logo smallLogo;
    public BrandingConf withSmallLogo(Logo smallLogo) {
        this.smallLogo = smallLogo;
        return this;
    }
    @JsonProperty("wideLogo")
    public Logo wideLogo;
    public BrandingConf withWideLogo(Logo wideLogo) {
        this.wideLogo = wideLogo;
        return this;
    }
}
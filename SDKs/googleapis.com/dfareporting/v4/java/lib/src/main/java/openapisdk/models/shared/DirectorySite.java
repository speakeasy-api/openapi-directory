package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectorySite
 * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
**/
public class DirectorySite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DirectorySite withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public DirectorySite withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inpageTagFormats")
    public DirectorySiteInpageTagFormatsEnum[] inpageTagFormats;
    public DirectorySite withInpageTagFormats(DirectorySiteInpageTagFormatsEnum[] inpageTagFormats) {
        this.inpageTagFormats = inpageTagFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interstitialTagFormats")
    public DirectorySiteInterstitialTagFormatsEnum[] interstitialTagFormats;
    public DirectorySite withInterstitialTagFormats(DirectorySiteInterstitialTagFormatsEnum[] interstitialTagFormats) {
        this.interstitialTagFormats = interstitialTagFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DirectorySite withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DirectorySite withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public DirectorySiteSettings settings;
    public DirectorySite withSettings(DirectorySiteSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public DirectorySite withUrl(String url) {
        this.url = url;
        return this;
    }
}
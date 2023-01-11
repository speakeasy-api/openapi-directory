package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditAlbumAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_color")
    public String brandColor;
    public EditAlbumAlt1RequestBody withBrandColor(String brandColor) {
        this.brandColor = brandColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EditAlbumAlt1RequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public EditAlbumAlt1RequestBody withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_nav")
    public Boolean hideNav;
    public EditAlbumAlt1RequestBody withHideNav(Boolean hideNav) {
        this.hideNav = hideNav;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public EditAlbumAlt1RequestBodyLayoutEnum layout;
    public EditAlbumAlt1RequestBody withLayout(EditAlbumAlt1RequestBodyLayoutEnum layout) {
        this.layout = layout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EditAlbumAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public EditAlbumAlt1RequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public EditAlbumAlt1RequestBodyPrivacyEnum privacy;
    public EditAlbumAlt1RequestBody withPrivacy(EditAlbumAlt1RequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_mode")
    public Boolean reviewMode;
    public EditAlbumAlt1RequestBody withReviewMode(Boolean reviewMode) {
        this.reviewMode = reviewMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public EditAlbumAlt1RequestBodySortEnum sort;
    public EditAlbumAlt1RequestBody withSort(EditAlbumAlt1RequestBodySortEnum sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public EditAlbumAlt1RequestBodyThemeEnum theme;
    public EditAlbumAlt1RequestBody withTheme(EditAlbumAlt1RequestBodyThemeEnum theme) {
        this.theme = theme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public EditAlbumAlt1RequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_custom_domain")
    public Boolean useCustomDomain;
    public EditAlbumAlt1RequestBody withUseCustomDomain(Boolean useCustomDomain) {
        this.useCustomDomain = useCustomDomain;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditAlbumRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_color")
    public String brandColor;
    public EditAlbumRequestBody withBrandColor(String brandColor) {
        this.brandColor = brandColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EditAlbumRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public EditAlbumRequestBody withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_nav")
    public Boolean hideNav;
    public EditAlbumRequestBody withHideNav(Boolean hideNav) {
        this.hideNav = hideNav;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public EditAlbumRequestBodyLayoutEnum layout;
    public EditAlbumRequestBody withLayout(EditAlbumRequestBodyLayoutEnum layout) {
        this.layout = layout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EditAlbumRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public EditAlbumRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public EditAlbumRequestBodyPrivacyEnum privacy;
    public EditAlbumRequestBody withPrivacy(EditAlbumRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_mode")
    public Boolean reviewMode;
    public EditAlbumRequestBody withReviewMode(Boolean reviewMode) {
        this.reviewMode = reviewMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public EditAlbumRequestBodySortEnum sort;
    public EditAlbumRequestBody withSort(EditAlbumRequestBodySortEnum sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public EditAlbumRequestBodyThemeEnum theme;
    public EditAlbumRequestBody withTheme(EditAlbumRequestBodyThemeEnum theme) {
        this.theme = theme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public EditAlbumRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_custom_domain")
    public Boolean useCustomDomain;
    public EditAlbumRequestBody withUseCustomDomain(Boolean useCustomDomain) {
        this.useCustomDomain = useCustomDomain;
        return this;
    }
}
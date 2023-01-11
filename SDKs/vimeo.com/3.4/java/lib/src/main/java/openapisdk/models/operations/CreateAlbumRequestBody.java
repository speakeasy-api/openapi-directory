package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAlbumRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_color")
    public String brandColor;
    public CreateAlbumRequestBody withBrandColor(String brandColor) {
        this.brandColor = brandColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAlbumRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_nav")
    public Boolean hideNav;
    public CreateAlbumRequestBody withHideNav(Boolean hideNav) {
        this.hideNav = hideNav;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public CreateAlbumRequestBodyLayoutEnum layout;
    public CreateAlbumRequestBody withLayout(CreateAlbumRequestBodyLayoutEnum layout) {
        this.layout = layout;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAlbumRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public CreateAlbumRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public CreateAlbumRequestBodyPrivacyEnum privacy;
    public CreateAlbumRequestBody withPrivacy(CreateAlbumRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_mode")
    public Boolean reviewMode;
    public CreateAlbumRequestBody withReviewMode(Boolean reviewMode) {
        this.reviewMode = reviewMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public CreateAlbumRequestBodySortEnum sort;
    public CreateAlbumRequestBody withSort(CreateAlbumRequestBodySortEnum sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public CreateAlbumRequestBodyThemeEnum theme;
    public CreateAlbumRequestBody withTheme(CreateAlbumRequestBodyThemeEnum theme) {
        this.theme = theme;
        return this;
    }
}
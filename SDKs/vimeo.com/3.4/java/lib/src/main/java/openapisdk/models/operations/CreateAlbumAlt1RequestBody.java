package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAlbumAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_color")
    public String brandColor;
    public CreateAlbumAlt1RequestBody withBrandColor(String brandColor) {
        this.brandColor = brandColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAlbumAlt1RequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_nav")
    public Boolean hideNav;
    public CreateAlbumAlt1RequestBody withHideNav(Boolean hideNav) {
        this.hideNav = hideNav;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public CreateAlbumAlt1RequestBodyLayoutEnum layout;
    public CreateAlbumAlt1RequestBody withLayout(CreateAlbumAlt1RequestBodyLayoutEnum layout) {
        this.layout = layout;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAlbumAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public CreateAlbumAlt1RequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public CreateAlbumAlt1RequestBodyPrivacyEnum privacy;
    public CreateAlbumAlt1RequestBody withPrivacy(CreateAlbumAlt1RequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_mode")
    public Boolean reviewMode;
    public CreateAlbumAlt1RequestBody withReviewMode(Boolean reviewMode) {
        this.reviewMode = reviewMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public CreateAlbumAlt1RequestBodySortEnum sort;
    public CreateAlbumAlt1RequestBody withSort(CreateAlbumAlt1RequestBodySortEnum sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public CreateAlbumAlt1RequestBodyThemeEnum theme;
    public CreateAlbumAlt1RequestBody withTheme(CreateAlbumAlt1RequestBodyThemeEnum theme) {
        this.theme = theme;
        return this;
    }
}
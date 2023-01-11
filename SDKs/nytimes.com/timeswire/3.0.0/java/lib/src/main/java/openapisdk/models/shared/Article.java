package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Article {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abstract")
    public String abstract_;
    public Article withAbstract(String abstract_) {
        this.abstract_ = abstract_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blog_name")
    public String blogName;
    public Article withBlogName(String blogName) {
        this.blogName = blogName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byline")
    public String byline;
    public Article withByline(String byline) {
        this.byline = byline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public Article withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("des_facet")
    public String[] desFacet;
    public Article withDesFacet(String[] desFacet) {
        this.desFacet = desFacet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo_facet")
    public String[] geoFacet;
    public Article withGeoFacet(String[] geoFacet) {
        this.geoFacet = geoFacet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline")
    public String headline;
    public Article withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item_type")
    public String itemType;
    public Article withItemType(String itemType) {
        this.itemType = itemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kicker")
    public String kicker;
    public Article withKicker(String kicker) {
        this.kicker = kicker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("material_type_facet")
    public String materialTypeFacet;
    public Article withMaterialTypeFacet(String materialTypeFacet) {
        this.materialTypeFacet = materialTypeFacet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multimedia")
    public ArticleMultimedia[] multimedia;
    public Article withMultimedia(ArticleMultimedia[] multimedia) {
        this.multimedia = multimedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_facet")
    public String orgFacet;
    public Article withOrgFacet(String orgFacet) {
        this.orgFacet = orgFacet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_facet")
    public String[] perFacet;
    public Article withPerFacet(String[] perFacet) {
        this.perFacet = perFacet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public Article withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related_urls")
    public ArticleRelatedUrls[] relatedUrls;
    public Article withRelatedUrls(ArticleRelatedUrls[] relatedUrls) {
        this.relatedUrls = relatedUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public String section;
    public Article withSection(String section) {
        this.section = section;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_url")
    public String shortUrl;
    public Article withShortUrl(String shortUrl) {
        this.shortUrl = shortUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Article withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subsection")
    public String subsection;
    public Article withSubsection(String subsection) {
        this.subsection = subsection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail_standard")
    public String thumbnailStandard;
    public Article withThumbnailStandard(String thumbnailStandard) {
        this.thumbnailStandard = thumbnailStandard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Article withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_date")
    public String updatedDate;
    public Article withUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Article withUrl(String url) {
        this.url = url;
        return this;
    }
}
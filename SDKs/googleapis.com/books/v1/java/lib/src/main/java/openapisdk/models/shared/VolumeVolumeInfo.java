package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeVolumeInfo
 * General volume information.
**/
public class VolumeVolumeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAnonLogging")
    public Boolean allowAnonLogging;
    public VolumeVolumeInfo withAllowAnonLogging(Boolean allowAnonLogging) {
        this.allowAnonLogging = allowAnonLogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authors")
    public String[] authors;
    public VolumeVolumeInfo withAuthors(String[] authors) {
        this.authors = authors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageRating")
    public Double averageRating;
    public VolumeVolumeInfo withAverageRating(Double averageRating) {
        this.averageRating = averageRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalVolumeLink")
    public String canonicalVolumeLink;
    public VolumeVolumeInfo withCanonicalVolumeLink(String canonicalVolumeLink) {
        this.canonicalVolumeLink = canonicalVolumeLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public VolumeVolumeInfo withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comicsContent")
    public Boolean comicsContent;
    public VolumeVolumeInfo withComicsContent(Boolean comicsContent) {
        this.comicsContent = comicsContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentVersion")
    public String contentVersion;
    public VolumeVolumeInfo withContentVersion(String contentVersion) {
        this.contentVersion = contentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VolumeVolumeInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public VolumeVolumeInfoDimensions dimensions;
    public VolumeVolumeInfo withDimensions(VolumeVolumeInfoDimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLinks")
    public VolumeVolumeInfoImageLinks imageLinks;
    public VolumeVolumeInfo withImageLinks(VolumeVolumeInfoImageLinks imageLinks) {
        this.imageLinks = imageLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("industryIdentifiers")
    public VolumeVolumeInfoIndustryIdentifiers[] industryIdentifiers;
    public VolumeVolumeInfo withIndustryIdentifiers(VolumeVolumeInfoIndustryIdentifiers[] industryIdentifiers) {
        this.industryIdentifiers = industryIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoLink")
    public String infoLink;
    public VolumeVolumeInfo withInfoLink(String infoLink) {
        this.infoLink = infoLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public VolumeVolumeInfo withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainCategory")
    public String mainCategory;
    public VolumeVolumeInfo withMainCategory(String mainCategory) {
        this.mainCategory = mainCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityRating")
    public String maturityRating;
    public VolumeVolumeInfo withMaturityRating(String maturityRating) {
        this.maturityRating = maturityRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageCount")
    public Integer pageCount;
    public VolumeVolumeInfo withPageCount(Integer pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelizationSummary")
    public VolumeVolumeInfoPanelizationSummary panelizationSummary;
    public VolumeVolumeInfo withPanelizationSummary(VolumeVolumeInfoPanelizationSummary panelizationSummary) {
        this.panelizationSummary = panelizationSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewLink")
    public String previewLink;
    public VolumeVolumeInfo withPreviewLink(String previewLink) {
        this.previewLink = previewLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printType")
    public String printType;
    public VolumeVolumeInfo withPrintType(String printType) {
        this.printType = printType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printedPageCount")
    public Integer printedPageCount;
    public VolumeVolumeInfo withPrintedPageCount(Integer printedPageCount) {
        this.printedPageCount = printedPageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedDate")
    public String publishedDate;
    public VolumeVolumeInfo withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public VolumeVolumeInfo withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingsCount")
    public Integer ratingsCount;
    public VolumeVolumeInfo withRatingsCount(Integer ratingsCount) {
        this.ratingsCount = ratingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readingModes")
    public VolumeVolumeInfoReadingModes readingModes;
    public VolumeVolumeInfo withReadingModes(VolumeVolumeInfoReadingModes readingModes) {
        this.readingModes = readingModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplePageCount")
    public Integer samplePageCount;
    public VolumeVolumeInfo withSamplePageCount(Integer samplePageCount) {
        this.samplePageCount = samplePageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesInfo")
    public Volumeseriesinfo seriesInfo;
    public VolumeVolumeInfo withSeriesInfo(Volumeseriesinfo seriesInfo) {
        this.seriesInfo = seriesInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtitle")
    public String subtitle;
    public VolumeVolumeInfo withSubtitle(String subtitle) {
        this.subtitle = subtitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public VolumeVolumeInfo withTitle(String title) {
        this.title = title;
        return this;
    }
}
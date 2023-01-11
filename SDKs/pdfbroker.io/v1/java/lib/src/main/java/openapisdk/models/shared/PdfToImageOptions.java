package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PdfToImageOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Height")
    public Integer height;
    public PdfToImageOptions withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HorizontalResolution")
    public Double horizontalResolution;
    public PdfToImageOptions withHorizontalResolution(Double horizontalResolution) {
        this.horizontalResolution = horizontalResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageFormat")
    public String imageFormat;
    public PdfToImageOptions withImageFormat(String imageFormat) {
        this.imageFormat = imageFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JpegQuality")
    public Integer jpegQuality;
    public PdfToImageOptions withJpegQuality(Integer jpegQuality) {
        this.jpegQuality = jpegQuality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Integer pageNumber;
    public PdfToImageOptions withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PngCompressionLevel")
    public Integer pngCompressionLevel;
    public PdfToImageOptions withPngCompressionLevel(Integer pngCompressionLevel) {
        this.pngCompressionLevel = pngCompressionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transparent")
    public Boolean transparent;
    public PdfToImageOptions withTransparent(Boolean transparent) {
        this.transparent = transparent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerticalResolution")
    public Double verticalResolution;
    public PdfToImageOptions withVerticalResolution(Double verticalResolution) {
        this.verticalResolution = verticalResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Width")
    public Integer width;
    public PdfToImageOptions withWidth(Integer width) {
        this.width = width;
        return this;
    }
}
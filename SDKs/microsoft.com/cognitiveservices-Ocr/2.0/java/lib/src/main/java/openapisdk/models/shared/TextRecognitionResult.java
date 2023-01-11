package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextRecognitionResult
 * An object representing a recognized text region
**/
public class TextRecognitionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clockwiseOrientation")
    public Double clockwiseOrientation;
    public TextRecognitionResult withClockwiseOrientation(Double clockwiseOrientation) {
        this.clockwiseOrientation = clockwiseOrientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public TextRecognitionResult withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonProperty("lines")
    public Line[] lines;
    public TextRecognitionResult withLines(Line[] lines) {
        this.lines = lines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public TextRecognitionResult withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public TextRecognitionResultUnitEnum unit;
    public TextRecognitionResult withUnit(TextRecognitionResultUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public TextRecognitionResult withWidth(Double width) {
        this.width = width;
        return this;
    }
}
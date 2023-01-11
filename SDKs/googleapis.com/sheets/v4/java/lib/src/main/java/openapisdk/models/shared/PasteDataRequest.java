package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PasteDataRequest
 * Inserts data into the spreadsheet starting at the specified coordinate.
**/
public class PasteDataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinate")
    public GridCoordinate coordinate;
    public PasteDataRequest withCoordinate(GridCoordinate coordinate) {
        this.coordinate = coordinate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public PasteDataRequest withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delimiter")
    public String delimiter;
    public PasteDataRequest withDelimiter(String delimiter) {
        this.delimiter = delimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public Boolean html;
    public PasteDataRequest withHtml(Boolean html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PasteDataRequestTypeEnum type;
    public PasteDataRequest withType(PasteDataRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}
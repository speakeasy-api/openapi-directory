package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedStatus
 * The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
**/
public class DatafeedStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public DatafeedStatus withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datafeedId")
    public String datafeedId;
    public DatafeedStatus withDatafeedId(String datafeedId) {
        this.datafeedId = datafeedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public DatafeedStatusError[] errors;
    public DatafeedStatus withErrors(DatafeedStatusError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsTotal")
    public String itemsTotal;
    public DatafeedStatus withItemsTotal(String itemsTotal) {
        this.itemsTotal = itemsTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemsValid")
    public String itemsValid;
    public DatafeedStatus withItemsValid(String itemsValid) {
        this.itemsValid = itemsValid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DatafeedStatus withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public DatafeedStatus withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUploadDate")
    public String lastUploadDate;
    public DatafeedStatus withLastUploadDate(String lastUploadDate) {
        this.lastUploadDate = lastUploadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingStatus")
    public String processingStatus;
    public DatafeedStatus withProcessingStatus(String processingStatus) {
        this.processingStatus = processingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public DatafeedStatusError[] warnings;
    public DatafeedStatus withWarnings(DatafeedStatusError[] warnings) {
        this.warnings = warnings;
        return this;
    }
}
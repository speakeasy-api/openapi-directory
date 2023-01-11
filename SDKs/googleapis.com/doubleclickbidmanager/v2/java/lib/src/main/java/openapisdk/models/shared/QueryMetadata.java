package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryMetadata
 * Query metadata.
**/
public class QueryMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRange")
    public DataRange dataRange;
    public QueryMetadata withDataRange(DataRange dataRange) {
        this.dataRange = dataRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public QueryMetadataFormatEnum format;
    public QueryMetadata withFormat(QueryMetadataFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendNotification")
    public Boolean sendNotification;
    public QueryMetadata withSendNotification(Boolean sendNotification) {
        this.sendNotification = sendNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareEmailAddress")
    public String[] shareEmailAddress;
    public QueryMetadata withShareEmailAddress(String[] shareEmailAddress) {
        this.shareEmailAddress = shareEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public QueryMetadata withTitle(String title) {
        this.title = title;
        return this;
    }
}
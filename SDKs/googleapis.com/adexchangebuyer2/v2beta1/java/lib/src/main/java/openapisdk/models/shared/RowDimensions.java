package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RowDimensions
 * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
**/
public class RowDimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherIdentifier")
    public String publisherIdentifier;
    public RowDimensions withPublisherIdentifier(String publisherIdentifier) {
        this.publisherIdentifier = publisherIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeInterval")
    public TimeInterval timeInterval;
    public RowDimensions withTimeInterval(TimeInterval timeInterval) {
        this.timeInterval = timeInterval;
        return this;
    }
}
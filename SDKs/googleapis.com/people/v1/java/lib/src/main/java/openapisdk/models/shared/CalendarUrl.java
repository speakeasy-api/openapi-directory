package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalendarUrl
 * A person's calendar URL.
**/
public class CalendarUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedType")
    public String formattedType;
    public CalendarUrl withFormattedType(String formattedType) {
        this.formattedType = formattedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public CalendarUrl withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CalendarUrl withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CalendarUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}
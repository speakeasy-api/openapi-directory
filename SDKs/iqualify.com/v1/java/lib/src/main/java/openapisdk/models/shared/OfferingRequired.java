package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OfferingRequired {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badge")
    public OfferingRequiredBadge badge;
    public OfferingRequired withBadge(OfferingRequiredBadge badge) {
        this.badge = badge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentId")
    public String contentId;
    public OfferingRequired withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDefaultChannels")
    public Boolean createDefaultChannels;
    public OfferingRequired withCreateDefaultChannels(Boolean createDefaultChannels) {
        this.createDefaultChannels = createDefaultChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OfferingRequired withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("earlyCloseOffDate")
    public OffsetDateTime earlyCloseOffDate;
    public OfferingRequired withEarlyCloseOffDate(OffsetDateTime earlyCloseOffDate) {
        this.earlyCloseOffDate = earlyCloseOffDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public OfferingRequired withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasEarlyCloseOff")
    public Boolean hasEarlyCloseOff;
    public OfferingRequired withHasEarlyCloseOff(Boolean hasEarlyCloseOff) {
        this.hasEarlyCloseOff = hasEarlyCloseOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public OfferingRequired withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReadonly")
    public Boolean isReadonly;
    public OfferingRequired withIsReadonly(Boolean isReadonly) {
        this.isReadonly = isReadonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public OfferingRequiredMetadata metadata;
    public OfferingRequired withMetadata(OfferingRequiredMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OfferingRequired withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootContentId")
    public String rootContentId;
    public OfferingRequired withRootContentId(String rootContentId) {
        this.rootContentId = rootContentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public OfferingRequired withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trailerVideoUrl")
    public String trailerVideoUrl;
    public OfferingRequired withTrailerVideoUrl(String trailerVideoUrl) {
        this.trailerVideoUrl = trailerVideoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useRelativeDates")
    public Boolean useRelativeDates;
    public OfferingRequired withUseRelativeDates(Boolean useRelativeDates) {
        this.useRelativeDates = useRelativeDates;
        return this;
    }
}
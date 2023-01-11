package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Offering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badge")
    public OfferingBadge badge;
    public Offering withBadge(OfferingBadge badge) {
        this.badge = badge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentId")
    public String contentId;
    public Offering withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Offering withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("earlyCloseOffDate")
    public OffsetDateTime earlyCloseOffDate;
    public Offering withEarlyCloseOffDate(OffsetDateTime earlyCloseOffDate) {
        this.earlyCloseOffDate = earlyCloseOffDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public Offering withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasEarlyCloseOff")
    public Boolean hasEarlyCloseOff;
    public Offering withHasEarlyCloseOff(Boolean hasEarlyCloseOff) {
        this.hasEarlyCloseOff = hasEarlyCloseOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public Offering withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReadonly")
    public Boolean isReadonly;
    public Offering withIsReadonly(Boolean isReadonly) {
        this.isReadonly = isReadonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public OfferingMetadata1 metadata;
    public Offering withMetadata(OfferingMetadata1 metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Offering withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public String overview;
    public Offering withOverview(String overview) {
        this.overview = overview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootContentId")
    public String rootContentId;
    public Offering withRootContentId(String rootContentId) {
        this.rootContentId = rootContentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public Offering withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trailerVideoUrl")
    public String trailerVideoUrl;
    public Offering withTrailerVideoUrl(String trailerVideoUrl) {
        this.trailerVideoUrl = trailerVideoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useRelativeDates")
    public Boolean useRelativeDates;
    public Offering withUseRelativeDates(Boolean useRelativeDates) {
        this.useRelativeDates = useRelativeDates;
        return this;
    }
}
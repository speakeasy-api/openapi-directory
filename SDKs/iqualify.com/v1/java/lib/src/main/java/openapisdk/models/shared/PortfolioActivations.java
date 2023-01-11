package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PortfolioActivations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentId")
    public String contentId;
    public PortfolioActivations withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public PortfolioActivations withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PortfolioActivations withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public String info;
    public PortfolioActivations withInfo(String info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnersCount")
    public Double learnersCount;
    public PortfolioActivations withLearnersCount(Double learnersCount) {
        this.learnersCount = learnersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public PortfolioActivationsMetadata metadata;
    public PortfolioActivations withMetadata(PortfolioActivationsMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PortfolioActivations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public PortfolioActivations withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}
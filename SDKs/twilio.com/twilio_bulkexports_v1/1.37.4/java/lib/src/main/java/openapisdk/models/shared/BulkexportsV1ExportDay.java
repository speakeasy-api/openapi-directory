package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkexportsV1ExportDay {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create_date")
    public String createDate;
    public BulkexportsV1ExportDay withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public String day;
    public BulkexportsV1ExportDay withDay(String day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public BulkexportsV1ExportDay withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public BulkexportsV1ExportDay withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public BulkexportsV1ExportDay withSize(Long size) {
        this.size = size;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Drive
 * Representation of a shared drive.
**/
public class Drive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundImageFile")
    public DriveBackgroundImageFile backgroundImageFile;
    public Drive withBackgroundImageFile(DriveBackgroundImageFile backgroundImageFile) {
        this.backgroundImageFile = backgroundImageFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundImageLink")
    public String backgroundImageLink;
    public Drive withBackgroundImageLink(String backgroundImageLink) {
        this.backgroundImageLink = backgroundImageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public DriveCapabilities capabilities;
    public Drive withCapabilities(DriveCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorRgb")
    public String colorRgb;
    public Drive withColorRgb(String colorRgb) {
        this.colorRgb = colorRgb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public Drive withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public Drive withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Drive withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Drive withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Drive withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnitId")
    public String orgUnitId;
    public Drive withOrgUnitId(String orgUnitId) {
        this.orgUnitId = orgUnitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public DriveRestrictions restrictions;
    public Drive withRestrictions(DriveRestrictions restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("themeId")
    public String themeId;
    public Drive withThemeId(String themeId) {
        this.themeId = themeId;
        return this;
    }
}
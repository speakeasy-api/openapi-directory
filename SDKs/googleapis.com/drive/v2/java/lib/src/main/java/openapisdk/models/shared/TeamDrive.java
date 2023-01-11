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
 * TeamDrive
 * Deprecated: use the drive collection instead.
**/
public class TeamDrive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundImageFile")
    public TeamDriveBackgroundImageFile backgroundImageFile;
    public TeamDrive withBackgroundImageFile(TeamDriveBackgroundImageFile backgroundImageFile) {
        this.backgroundImageFile = backgroundImageFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundImageLink")
    public String backgroundImageLink;
    public TeamDrive withBackgroundImageLink(String backgroundImageLink) {
        this.backgroundImageLink = backgroundImageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public TeamDriveCapabilities capabilities;
    public TeamDrive withCapabilities(TeamDriveCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorRgb")
    public String colorRgb;
    public TeamDrive withColorRgb(String colorRgb) {
        this.colorRgb = colorRgb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public TeamDrive withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TeamDrive withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TeamDrive withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamDrive withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnitId")
    public String orgUnitId;
    public TeamDrive withOrgUnitId(String orgUnitId) {
        this.orgUnitId = orgUnitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public TeamDriveRestrictions restrictions;
    public TeamDrive withRestrictions(TeamDriveRestrictions restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("themeId")
    public String themeId;
    public TeamDrive withThemeId(String themeId) {
        this.themeId = themeId;
        return this;
    }
}
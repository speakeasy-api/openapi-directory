package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Snapshot
 * An snapshot object.
**/
public class Snapshot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverImage")
    public SnapshotImage coverImage;
    public Snapshot withCoverImage(SnapshotImage coverImage) {
        this.coverImage = coverImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Snapshot withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveId")
    public String driveId;
    public Snapshot withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationMillis")
    public String durationMillis;
    public Snapshot withDurationMillis(String durationMillis) {
        this.durationMillis = durationMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Snapshot withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Snapshot withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedMillis")
    public String lastModifiedMillis;
    public Snapshot withLastModifiedMillis(String lastModifiedMillis) {
        this.lastModifiedMillis = lastModifiedMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressValue")
    public String progressValue;
    public Snapshot withProgressValue(String progressValue) {
        this.progressValue = progressValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Snapshot withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SnapshotTypeEnum type;
    public Snapshot withType(SnapshotTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueName")
    public String uniqueName;
    public Snapshot withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Asset
 * Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
**/
public class Asset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorName")
    public String authorName;
    public Asset withAuthorName(String authorName) {
        this.authorName = authorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Asset withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Asset withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Asset withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formats")
    public Format[] formats;
    public Asset withFormats(Format[] formats) {
        this.formats = formats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCurated")
    public Boolean isCurated;
    public Asset withIsCurated(Boolean isCurated) {
        this.isCurated = isCurated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public AssetLicenseEnum license;
    public Asset withLicense(AssetLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public String metadata;
    public Asset withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Asset withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentationParams")
    public PresentationParams presentationParams;
    public Asset withPresentationParams(PresentationParams presentationParams) {
        this.presentationParams = presentationParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remixInfo")
    public RemixInfo remixInfo;
    public Asset withRemixInfo(RemixInfo remixInfo) {
        this.remixInfo = remixInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public File thumbnail;
    public Asset withThumbnail(File thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Asset withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public AssetVisibilityEnum visibility;
    public Asset withVisibility(AssetVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}
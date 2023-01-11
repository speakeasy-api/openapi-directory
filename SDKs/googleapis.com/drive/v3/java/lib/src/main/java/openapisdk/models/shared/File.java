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
 * File
 * The metadata for a file.
**/
public class File {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appProperties")
    public java.util.Map<String, String> appProperties;
    public File withAppProperties(java.util.Map<String, String> appProperties) {
        this.appProperties = appProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public FileCapabilities capabilities;
    public File withCapabilities(FileCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentHints")
    public FileContentHints contentHints;
    public File withContentHints(FileContentHints contentHints) {
        this.contentHints = contentHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentRestrictions")
    public ContentRestriction[] contentRestrictions;
    public File withContentRestrictions(ContentRestriction[] contentRestrictions) {
        this.contentRestrictions = contentRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyRequiresWriterPermission")
    public Boolean copyRequiresWriterPermission;
    public File withCopyRequiresWriterPermission(Boolean copyRequiresWriterPermission) {
        this.copyRequiresWriterPermission = copyRequiresWriterPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdTime")
    public OffsetDateTime createdTime;
    public File withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public File withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveId")
    public String driveId;
    public File withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitlyTrashed")
    public Boolean explicitlyTrashed;
    public File withExplicitlyTrashed(Boolean explicitlyTrashed) {
        this.explicitlyTrashed = explicitlyTrashed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportLinks")
    public java.util.Map<String, String> exportLinks;
    public File withExportLinks(java.util.Map<String, String> exportLinks) {
        this.exportLinks = exportLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileExtension")
    public String fileExtension;
    public File withFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folderColorRgb")
    public String folderColorRgb;
    public File withFolderColorRgb(String folderColorRgb) {
        this.folderColorRgb = folderColorRgb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullFileExtension")
    public String fullFileExtension;
    public File withFullFileExtension(String fullFileExtension) {
        this.fullFileExtension = fullFileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasAugmentedPermissions")
    public Boolean hasAugmentedPermissions;
    public File withHasAugmentedPermissions(Boolean hasAugmentedPermissions) {
        this.hasAugmentedPermissions = hasAugmentedPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasThumbnail")
    public Boolean hasThumbnail;
    public File withHasThumbnail(Boolean hasThumbnail) {
        this.hasThumbnail = hasThumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headRevisionId")
    public String headRevisionId;
    public File withHeadRevisionId(String headRevisionId) {
        this.headRevisionId = headRevisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconLink")
    public String iconLink;
    public File withIconLink(String iconLink) {
        this.iconLink = iconLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public File withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageMediaMetadata")
    public FileImageMediaMetadata imageMediaMetadata;
    public File withImageMediaMetadata(FileImageMediaMetadata imageMediaMetadata) {
        this.imageMediaMetadata = imageMediaMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAppAuthorized")
    public Boolean isAppAuthorized;
    public File withIsAppAuthorized(Boolean isAppAuthorized) {
        this.isAppAuthorized = isAppAuthorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public File withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelInfo")
    public FileLabelInfo labelInfo;
    public File withLabelInfo(FileLabelInfo labelInfo) {
        this.labelInfo = labelInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifyingUser")
    public User lastModifyingUser;
    public File withLastModifyingUser(User lastModifyingUser) {
        this.lastModifyingUser = lastModifyingUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkShareMetadata")
    public FileLinkShareMetadata linkShareMetadata;
    public File withLinkShareMetadata(FileLinkShareMetadata linkShareMetadata) {
        this.linkShareMetadata = linkShareMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5Checksum")
    public String md5Checksum;
    public File withMd5Checksum(String md5Checksum) {
        this.md5Checksum = md5Checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public File withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedByMe")
    public Boolean modifiedByMe;
    public File withModifiedByMe(Boolean modifiedByMe) {
        this.modifiedByMe = modifiedByMe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedByMeTime")
    public OffsetDateTime modifiedByMeTime;
    public File withModifiedByMeTime(OffsetDateTime modifiedByMeTime) {
        this.modifiedByMeTime = modifiedByMeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedTime")
    public OffsetDateTime modifiedTime;
    public File withModifiedTime(OffsetDateTime modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public File withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalFilename")
    public String originalFilename;
    public File withOriginalFilename(String originalFilename) {
        this.originalFilename = originalFilename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedByMe")
    public Boolean ownedByMe;
    public File withOwnedByMe(Boolean ownedByMe) {
        this.ownedByMe = ownedByMe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owners")
    public User[] owners;
    public File withOwners(User[] owners) {
        this.owners = owners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parents")
    public String[] parents;
    public File withParents(String[] parents) {
        this.parents = parents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionIds")
    public String[] permissionIds;
    public File withPermissionIds(String[] permissionIds) {
        this.permissionIds = permissionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public Permission[] permissions;
    public File withPermissions(Permission[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public File withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaBytesUsed")
    public String quotaBytesUsed;
    public File withQuotaBytesUsed(String quotaBytesUsed) {
        this.quotaBytesUsed = quotaBytesUsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceKey")
    public String resourceKey;
    public File withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Checksum")
    public String sha1Checksum;
    public File withSha1Checksum(String sha1Checksum) {
        this.sha1Checksum = sha1Checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Checksum")
    public String sha256Checksum;
    public File withSha256Checksum(String sha256Checksum) {
        this.sha256Checksum = sha256Checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared")
    public Boolean shared;
    public File withShared(Boolean shared) {
        this.shared = shared;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("sharedWithMeTime")
    public OffsetDateTime sharedWithMeTime;
    public File withSharedWithMeTime(OffsetDateTime sharedWithMeTime) {
        this.sharedWithMeTime = sharedWithMeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharingUser")
    public User sharingUser;
    public File withSharingUser(User sharingUser) {
        this.sharingUser = sharingUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortcutDetails")
    public FileShortcutDetails shortcutDetails;
    public File withShortcutDetails(FileShortcutDetails shortcutDetails) {
        this.shortcutDetails = shortcutDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public File withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spaces")
    public String[] spaces;
    public File withSpaces(String[] spaces) {
        this.spaces = spaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred")
    public Boolean starred;
    public File withStarred(Boolean starred) {
        this.starred = starred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDriveId")
    public String teamDriveId;
    public File withTeamDriveId(String teamDriveId) {
        this.teamDriveId = teamDriveId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailLink")
    public String thumbnailLink;
    public File withThumbnailLink(String thumbnailLink) {
        this.thumbnailLink = thumbnailLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailVersion")
    public String thumbnailVersion;
    public File withThumbnailVersion(String thumbnailVersion) {
        this.thumbnailVersion = thumbnailVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trashed")
    public Boolean trashed;
    public File withTrashed(Boolean trashed) {
        this.trashed = trashed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trashedTime")
    public OffsetDateTime trashedTime;
    public File withTrashedTime(OffsetDateTime trashedTime) {
        this.trashedTime = trashedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trashingUser")
    public User trashingUser;
    public File withTrashingUser(User trashingUser) {
        this.trashingUser = trashingUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public File withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoMediaMetadata")
    public FileVideoMediaMetadata videoMediaMetadata;
    public File withVideoMediaMetadata(FileVideoMediaMetadata videoMediaMetadata) {
        this.videoMediaMetadata = videoMediaMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewedByMe")
    public Boolean viewedByMe;
    public File withViewedByMe(Boolean viewedByMe) {
        this.viewedByMe = viewedByMe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("viewedByMeTime")
    public OffsetDateTime viewedByMeTime;
    public File withViewedByMeTime(OffsetDateTime viewedByMeTime) {
        this.viewedByMeTime = viewedByMeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewersCanCopyContent")
    public Boolean viewersCanCopyContent;
    public File withViewersCanCopyContent(Boolean viewersCanCopyContent) {
        this.viewersCanCopyContent = viewersCanCopyContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webContentLink")
    public String webContentLink;
    public File withWebContentLink(String webContentLink) {
        this.webContentLink = webContentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webViewLink")
    public String webViewLink;
    public File withWebViewLink(String webViewLink) {
        this.webViewLink = webViewLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writersCanShare")
    public Boolean writersCanShare;
    public File withWritersCanShare(Boolean writersCanShare) {
        this.writersCanShare = writersCanShare;
        return this;
    }
}
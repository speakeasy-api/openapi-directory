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
    @JsonProperty("alternateLink")
    public String alternateLink;
    public File withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appDataContents")
    public Boolean appDataContents;
    public File withAppDataContents(Boolean appDataContents) {
        this.appDataContents = appDataContents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canComment")
    public Boolean canComment;
    public File withCanComment(Boolean canComment) {
        this.canComment = canComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReadRevisions")
    public Boolean canReadRevisions;
    public File withCanReadRevisions(Boolean canReadRevisions) {
        this.canReadRevisions = canReadRevisions;
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
    @JsonProperty("copyable")
    public Boolean copyable;
    public File withCopyable(Boolean copyable) {
        this.copyable = copyable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdDate")
    public OffsetDateTime createdDate;
    public File withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultOpenWithLink")
    public String defaultOpenWithLink;
    public File withDefaultOpenWithLink(String defaultOpenWithLink) {
        this.defaultOpenWithLink = defaultOpenWithLink;
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
    @JsonProperty("downloadUrl")
    public String downloadUrl;
    public File withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
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
    @JsonProperty("editable")
    public Boolean editable;
    public File withEditable(Boolean editable) {
        this.editable = editable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embedLink")
    public String embedLink;
    public File withEmbedLink(String embedLink) {
        this.embedLink = embedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public File withEtag(String etag) {
        this.etag = etag;
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
    @JsonProperty("fileSize")
    public String fileSize;
    public File withFileSize(String fileSize) {
        this.fileSize = fileSize;
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
    @JsonProperty("indexableText")
    public FileIndexableText indexableText;
    public File withIndexableText(FileIndexableText indexableText) {
        this.indexableText = indexableText;
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
    @JsonProperty("labels")
    public FileLabels labels;
    public File withLabels(FileLabels labels) {
        this.labels = labels;
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
    @JsonProperty("lastModifyingUserName")
    public String lastModifyingUserName;
    public File withLastModifyingUserName(String lastModifyingUserName) {
        this.lastModifyingUserName = lastModifyingUserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastViewedByMeDate")
    public OffsetDateTime lastViewedByMeDate;
    public File withLastViewedByMeDate(OffsetDateTime lastViewedByMeDate) {
        this.lastViewedByMeDate = lastViewedByMeDate;
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
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("markedViewedByMeDate")
    public OffsetDateTime markedViewedByMeDate;
    public File withMarkedViewedByMeDate(OffsetDateTime markedViewedByMeDate) {
        this.markedViewedByMeDate = markedViewedByMeDate;
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
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedByMeDate")
    public OffsetDateTime modifiedByMeDate;
    public File withModifiedByMeDate(OffsetDateTime modifiedByMeDate) {
        this.modifiedByMeDate = modifiedByMeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedDate")
    public OffsetDateTime modifiedDate;
    public File withModifiedDate(OffsetDateTime modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openWithLinks")
    public java.util.Map<String, String> openWithLinks;
    public File withOpenWithLinks(java.util.Map<String, String> openWithLinks) {
        this.openWithLinks = openWithLinks;
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
    @JsonProperty("ownerNames")
    public String[] ownerNames;
    public File withOwnerNames(String[] ownerNames) {
        this.ownerNames = ownerNames;
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
    public ParentReference[] parents;
    public File withParents(ParentReference[] parents) {
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
    public Property[] properties;
    public File withProperties(Property[] properties) {
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
    @JsonProperty("selfLink")
    public String selfLink;
    public File withSelfLink(String selfLink) {
        this.selfLink = selfLink;
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
    @JsonProperty("shareable")
    public Boolean shareable;
    public File withShareable(Boolean shareable) {
        this.shareable = shareable;
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
    @JsonProperty("sharedWithMeDate")
    public OffsetDateTime sharedWithMeDate;
    public File withSharedWithMeDate(OffsetDateTime sharedWithMeDate) {
        this.sharedWithMeDate = sharedWithMeDate;
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
    @JsonProperty("spaces")
    public String[] spaces;
    public File withSpaces(String[] spaces) {
        this.spaces = spaces;
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
    @JsonProperty("thumbnail")
    public FileThumbnail thumbnail;
    public File withThumbnail(FileThumbnail thumbnail) {
        this.thumbnail = thumbnail;
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
    @JsonProperty("title")
    public String title;
    public File withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trashedDate")
    public OffsetDateTime trashedDate;
    public File withTrashedDate(OffsetDateTime trashedDate) {
        this.trashedDate = trashedDate;
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
    @JsonProperty("userPermission")
    public Permission userPermission;
    public File withUserPermission(Permission userPermission) {
        this.userPermission = userPermission;
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
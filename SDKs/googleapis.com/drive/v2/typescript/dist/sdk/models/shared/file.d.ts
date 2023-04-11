import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRestriction } from "./contentrestriction";
import { Label } from "./label";
import { ParentReference } from "./parentreference";
import { Permission, PermissionInput } from "./permission";
import { Property } from "./property";
import { User } from "./user";
/**
 * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
 */
export declare class FileCapabilities extends SpeakeasyBase {
    /**
     * Whether the current user is the pending owner of the file. Not populated for shared drive files.
     */
    canAcceptOwnership?: boolean;
    /**
     * Whether the current user can add children to this folder. This is always false when the item is not a folder.
     */
    canAddChildren?: boolean;
    /**
     * Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.
     */
    canAddFolderFromAnotherDrive?: boolean;
    /**
     * Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.
     */
    canAddMyDriveParent?: boolean;
    /**
     * Whether the current user can change the copyRequiresWriterPermission restriction of this file.
     */
    canChangeCopyRequiresWriterPermission?: boolean;
    /**
     * Deprecated
     */
    canChangeRestrictedDownload?: boolean;
    /**
     * Whether the current user can change the securityUpdateEnabled field on link share metadata.
     */
    canChangeSecurityUpdateEnabled?: boolean;
    /**
     * Whether the current user can comment on this file.
     */
    canComment?: boolean;
    /**
     * Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.
     */
    canCopy?: boolean;
    /**
     * Whether the current user can delete this file.
     */
    canDelete?: boolean;
    /**
     * Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.
     */
    canDeleteChildren?: boolean;
    /**
     * Whether the current user can download this file.
     */
    canDownload?: boolean;
    /**
     * Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent.
     */
    canEdit?: boolean;
    /**
     * Whether the current user can list the children of this folder. This is always false when the item is not a folder.
     */
    canListChildren?: boolean;
    /**
     * Whether the current user can modify the content of this file.
     */
    canModifyContent?: boolean;
    /**
     * Whether the current user can modify restrictions on content of this file.
     */
    canModifyContentRestriction?: boolean;
    /**
     * Whether the current user can modify the labels on this file.
     */
    canModifyLabels?: boolean;
    /**
     * Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.
     */
    canMoveChildrenOutOfDrive?: boolean;
    /**
     * Deprecated - use canMoveChildrenOutOfDrive instead.
     */
    canMoveChildrenOutOfTeamDrive?: boolean;
    /**
     * Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.
     */
    canMoveChildrenWithinDrive?: boolean;
    /**
     * Deprecated - use canMoveChildrenWithinDrive instead.
     */
    canMoveChildrenWithinTeamDrive?: boolean;
    /**
     * Deprecated - use canMoveItemOutOfDrive instead.
     */
    canMoveItemIntoTeamDrive?: boolean;
    /**
     * Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.
     */
    canMoveItemOutOfDrive?: boolean;
    /**
     * Deprecated - use canMoveItemOutOfDrive instead.
     */
    canMoveItemOutOfTeamDrive?: boolean;
    /**
     * Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.
     */
    canMoveItemWithinDrive?: boolean;
    /**
     * Deprecated - use canMoveItemWithinDrive instead.
     */
    canMoveItemWithinTeamDrive?: boolean;
    /**
     * Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead.
     */
    canMoveTeamDriveItem?: boolean;
    /**
     * Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.
     */
    canReadDrive?: boolean;
    /**
     * Whether the current user can read the labels on this file.
     */
    canReadLabels?: boolean;
    /**
     * Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it isn't a folder, can be read.
     */
    canReadRevisions?: boolean;
    /**
     * Deprecated - use canReadDrive instead.
     */
    canReadTeamDrive?: boolean;
    /**
     * Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead.
     */
    canRemoveChildren?: boolean;
    /**
     * Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.
     */
    canRemoveMyDriveParent?: boolean;
    /**
     * Whether the current user can rename this file.
     */
    canRename?: boolean;
    /**
     * Whether the current user can modify the sharing settings for this file.
     */
    canShare?: boolean;
    /**
     * Whether the current user can move this file to trash.
     */
    canTrash?: boolean;
    /**
     * Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.
     */
    canTrashChildren?: boolean;
    /**
     * Whether the current user can restore this file from trash.
     */
    canUntrash?: boolean;
}
/**
 * Geographic location information stored in the image.
 */
export declare class FileImageMediaMetadataLocation extends SpeakeasyBase {
    /**
     * The altitude stored in the image.
     */
    altitude?: number;
    /**
     * The latitude stored in the image.
     */
    latitude?: number;
    /**
     * The longitude stored in the image.
     */
    longitude?: number;
}
/**
 * Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
 */
export declare class FileImageMediaMetadata extends SpeakeasyBase {
    /**
     * The aperture used to create the photo (f-number).
     */
    aperture?: number;
    /**
     * The make of the camera used to create the photo.
     */
    cameraMake?: string;
    /**
     * The model of the camera used to create the photo.
     */
    cameraModel?: string;
    /**
     * The color space of the photo.
     */
    colorSpace?: string;
    /**
     * The date and time the photo was taken (EXIF format timestamp).
     */
    date?: string;
    /**
     * The exposure bias of the photo (APEX value).
     */
    exposureBias?: number;
    /**
     * The exposure mode used to create the photo.
     */
    exposureMode?: string;
    /**
     * The length of the exposure, in seconds.
     */
    exposureTime?: number;
    /**
     * Whether a flash was used to create the photo.
     */
    flashUsed?: boolean;
    /**
     * The focal length used to create the photo, in millimeters.
     */
    focalLength?: number;
    /**
     * The height of the image in pixels.
     */
    height?: number;
    /**
     * The ISO speed used to create the photo.
     */
    isoSpeed?: number;
    /**
     * The lens used to create the photo.
     */
    lens?: string;
    /**
     * Geographic location information stored in the image.
     */
    location?: FileImageMediaMetadataLocation;
    /**
     * The smallest f-number of the lens at the focal length used to create the photo (APEX value).
     */
    maxApertureValue?: number;
    /**
     * The metering mode used to create the photo.
     */
    meteringMode?: string;
    /**
     * The number of clockwise 90 degree rotations applied from the image's original orientation.
     */
    rotation?: number;
    /**
     * The type of sensor used to create the photo.
     */
    sensor?: string;
    /**
     * The distance to the subject of the photo, in meters.
     */
    subjectDistance?: number;
    /**
     * The white balance mode used to create the photo.
     */
    whiteBalance?: string;
    /**
     * The width of the image in pixels.
     */
    width?: number;
}
/**
 * Indexable text attributes for the file (can only be written). For more information, see Manage file metadata.
 */
export declare class FileIndexableText extends SpeakeasyBase {
    /**
     * The text to be indexed for this file.
     */
    text?: string;
}
/**
 * An overview of the labels on the file.
 */
export declare class FileLabelInfo extends SpeakeasyBase {
    /**
     * The set of labels on the file as requested by the label IDs in the includeLabels parameter. By default, no labels are returned.
     */
    labels?: Label[];
}
/**
 * A group of labels for the file.
 */
export declare class FileLabels extends SpeakeasyBase {
    /**
     * Deprecated.
     */
    hidden?: boolean;
    /**
     * Whether the file has been modified by this user.
     */
    modified?: boolean;
    /**
     * Deprecated - use copyRequiresWriterPermission instead.
     */
    restricted?: boolean;
    /**
     * Whether this file is starred by the user.
     */
    starred?: boolean;
    /**
     * Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
     */
    trashed?: boolean;
    /**
     * Whether this file has been viewed by this user.
     */
    viewed?: boolean;
}
/**
 * Contains details about the link URLs that clients are using to refer to this item.
 */
export declare class FileLinkShareMetadata extends SpeakeasyBase {
    /**
     * Whether the file is eligible for security update.
     */
    securityUpdateEligible?: boolean;
    /**
     * Whether the security update is enabled for this file.
     */
    securityUpdateEnabled?: boolean;
}
/**
 * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
 */
export declare class FileShortcutDetails extends SpeakeasyBase {
    /**
     * The ID of the file that this shortcut points to.
     */
    targetId?: string;
    /**
     * The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.
     */
    targetMimeType?: string;
    /**
     * The ResourceKey for the target file.
     */
    targetResourceKey?: string;
}
/**
 * A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
 */
export declare class FileThumbnail extends SpeakeasyBase {
    /**
     * The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.
     */
    image?: string;
    /**
     * The MIME type of the thumbnail.
     */
    mimeType?: string;
}
/**
 * Metadata about video media. This will only be present for video types.
 */
export declare class FileVideoMediaMetadata extends SpeakeasyBase {
    /**
     * The duration of the video in milliseconds.
     */
    durationMillis?: string;
    /**
     * The height of the video in pixels.
     */
    height?: number;
    /**
     * The width of the video in pixels.
     */
    width?: number;
}
/**
 * The metadata for a file.
 */
export declare class FileInput extends SpeakeasyBase {
    /**
     * A link for opening the file in a relevant Google editor or viewer.
     */
    alternateLink?: string;
    /**
     * Whether this file is in the Application Data folder.
     */
    appDataContents?: boolean;
    /**
     * Deprecated: use capabilities/canComment.
     */
    canComment?: boolean;
    /**
     * Deprecated: use capabilities/canReadRevisions.
     */
    canReadRevisions?: boolean;
    /**
     * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: FileCapabilities;
    /**
     * Restrictions for accessing the content of the file. Only populated if such a restriction exists.
     */
    contentRestrictions?: ContentRestriction[];
    /**
     * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
     */
    copyRequiresWriterPermission?: boolean;
    /**
     * Deprecated: use capabilities/canCopy.
     */
    copyable?: boolean;
    /**
     * Create time for this file (formatted RFC 3339 timestamp).
     */
    createdDate?: Date;
    /**
     * A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.
     */
    defaultOpenWithLink?: string;
    /**
     * A short description of the file.
     */
    description?: string;
    /**
     * Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    downloadUrl?: string;
    /**
     * ID of the shared drive the file resides in. Only populated for items in shared drives.
     */
    driveId?: string;
    /**
     * Deprecated: use capabilities/canEdit.
     */
    editable?: boolean;
    /**
     * A link for embedding the file.
     */
    embedLink?: string;
    /**
     * ETag of the file.
     */
    etag?: string;
    /**
     * Whether this file has been explicitly trashed, as opposed to recursively trashed.
     */
    explicitlyTrashed?: boolean;
    /**
     * The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    fileExtension?: string;
    /**
     * The size of the file's content in bytes. This field is populated for files with binary content stored in Google Drive and for Docs Editors files; it is not populated for shortcuts or folders.
     */
    fileSize?: string;
    /**
     * Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.
     */
    folderColorRgb?: string;
    /**
     * The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    fullFileExtension?: string;
    /**
     * Whether there are permissions directly on this file. This field is only populated for items in shared drives.
     */
    hasAugmentedPermissions?: boolean;
    /**
     * Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
     */
    hasThumbnail?: boolean;
    /**
     * The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    headRevisionId?: string;
    /**
     * A link to the file's icon.
     */
    iconLink?: string;
    /**
     * The ID of the file.
     */
    id?: string;
    /**
     * Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
     */
    imageMediaMetadata?: FileImageMediaMetadata;
    /**
     * Indexable text attributes for the file (can only be written). For more information, see Manage file metadata.
     */
    indexableText?: FileIndexableText;
    /**
     * Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean;
    /**
     * The type of file. This is always drive#file.
     */
    kind?: string;
    /**
     * An overview of the labels on the file.
     */
    labelInfo?: FileLabelInfo;
    /**
     * A group of labels for the file.
     */
    labels?: FileLabels;
    /**
     * Information about a Drive user.
     */
    lastModifyingUser?: User;
    /**
     * Name of the last user to modify this file.
     */
    lastModifyingUserName?: string;
    /**
     * Last time this file was viewed by the user (formatted RFC 3339 timestamp).
     */
    lastViewedByMeDate?: Date;
    /**
     * Contains details about the link URLs that clients are using to refer to this item.
     */
    linkShareMetadata?: FileLinkShareMetadata;
    /**
     * Deprecated.
     */
    markedViewedByMeDate?: Date;
    /**
     * An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    md5Checksum?: string;
    /**
     * The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.
     */
    mimeType?: string;
    /**
     * Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
     */
    modifiedByMeDate?: Date;
    /**
     * Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
     */
    modifiedDate?: Date;
    /**
     * A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
     */
    openWithLinks?: Record<string, string>;
    /**
     * The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Google Drive.
     */
    originalFilename?: string;
    /**
     * Whether the file is owned by the current user. Not populated for items in shared drives.
     */
    ownedByMe?: boolean;
    /**
     * Name(s) of the owner(s) of this file. Not populated for items in shared drives.
     */
    ownerNames?: string[];
    /**
     * The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
     */
    owners?: User[];
    /**
     * Collection of parent folders which contain this file.
     *
     * @remarks
     * If not specified as part of an insert request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests can also use the addParents and removeParents parameters to modify the parents list.
     */
    parents?: ParentReference[];
    /**
     * List of permission IDs for users with access to this file.
     */
    permissionIds?: string[];
    /**
     * The list of permissions for users with access to this file. Not populated for items in shared drives.
     */
    permissions?: PermissionInput[];
    /**
     * The list of properties.
     */
    properties?: Property[];
    /**
     * The number of quota bytes used by this file.
     */
    quotaBytesUsed?: string;
    /**
     * A key needed to access the item via a shared link.
     */
    resourceKey?: string;
    /**
     * A link back to this file.
     */
    selfLink?: string;
    /**
     * The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha1Checksum?: string;
    /**
     * The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha256Checksum?: string;
    /**
     * Deprecated: use capabilities/canShare.
     */
    shareable?: boolean;
    /**
     * Whether the file has been shared. Not populated for items in shared drives.
     */
    shared?: boolean;
    /**
     * Time at which this file was shared with the user (formatted RFC 3339 timestamp).
     */
    sharedWithMeDate?: Date;
    /**
     * Information about a Drive user.
     */
    sharingUser?: User;
    /**
     * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
     */
    shortcutDetails?: FileShortcutDetails;
    /**
     * The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string[];
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string;
    /**
     * A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
     */
    thumbnail?: FileThumbnail;
    /**
     * A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request.
     */
    thumbnailLink?: string;
    /**
     * The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string;
    /**
     * The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.
     */
    title?: string;
    /**
     * The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.
     */
    trashedDate?: Date;
    /**
     * Information about a Drive user.
     */
    trashingUser?: User;
    /**
     * A permission for a file.
     */
    userPermission?: PermissionInput;
    /**
     * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
     */
    version?: string;
    /**
     * Metadata about video media. This will only be present for video types.
     */
    videoMediaMetadata?: FileVideoMediaMetadata;
    /**
     * A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
     */
    webContentLink?: string;
    /**
     * A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.
     */
    webViewLink?: string;
    /**
     * Whether writers can share the document with other users. Not populated for items in shared drives.
     */
    writersCanShare?: boolean;
}
/**
 * The metadata for a file.
 */
export declare class File extends SpeakeasyBase {
    /**
     * A link for opening the file in a relevant Google editor or viewer.
     */
    alternateLink?: string;
    /**
     * Whether this file is in the Application Data folder.
     */
    appDataContents?: boolean;
    /**
     * Deprecated: use capabilities/canComment.
     */
    canComment?: boolean;
    /**
     * Deprecated: use capabilities/canReadRevisions.
     */
    canReadRevisions?: boolean;
    /**
     * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: FileCapabilities;
    /**
     * Restrictions for accessing the content of the file. Only populated if such a restriction exists.
     */
    contentRestrictions?: ContentRestriction[];
    /**
     * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
     */
    copyRequiresWriterPermission?: boolean;
    /**
     * Deprecated: use capabilities/canCopy.
     */
    copyable?: boolean;
    /**
     * Create time for this file (formatted RFC 3339 timestamp).
     */
    createdDate?: Date;
    /**
     * A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used.
     */
    defaultOpenWithLink?: string;
    /**
     * A short description of the file.
     */
    description?: string;
    /**
     * Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    downloadUrl?: string;
    /**
     * ID of the shared drive the file resides in. Only populated for items in shared drives.
     */
    driveId?: string;
    /**
     * Deprecated: use capabilities/canEdit.
     */
    editable?: boolean;
    /**
     * A link for embedding the file.
     */
    embedLink?: string;
    /**
     * ETag of the file.
     */
    etag?: string;
    /**
     * Whether this file has been explicitly trashed, as opposed to recursively trashed.
     */
    explicitlyTrashed?: boolean;
    /**
     * Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: Record<string, string>;
    /**
     * The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    fileExtension?: string;
    /**
     * The size of the file's content in bytes. This field is populated for files with binary content stored in Google Drive and for Docs Editors files; it is not populated for shortcuts or folders.
     */
    fileSize?: string;
    /**
     * Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.
     */
    folderColorRgb?: string;
    /**
     * The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    fullFileExtension?: string;
    /**
     * Whether there are permissions directly on this file. This field is only populated for items in shared drives.
     */
    hasAugmentedPermissions?: boolean;
    /**
     * Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
     */
    hasThumbnail?: boolean;
    /**
     * The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    headRevisionId?: string;
    /**
     * A link to the file's icon.
     */
    iconLink?: string;
    /**
     * The ID of the file.
     */
    id?: string;
    /**
     * Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
     */
    imageMediaMetadata?: FileImageMediaMetadata;
    /**
     * Indexable text attributes for the file (can only be written). For more information, see Manage file metadata.
     */
    indexableText?: FileIndexableText;
    /**
     * Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean;
    /**
     * The type of file. This is always drive#file.
     */
    kind?: string;
    /**
     * An overview of the labels on the file.
     */
    labelInfo?: FileLabelInfo;
    /**
     * A group of labels for the file.
     */
    labels?: FileLabels;
    /**
     * Information about a Drive user.
     */
    lastModifyingUser?: User;
    /**
     * Name of the last user to modify this file.
     */
    lastModifyingUserName?: string;
    /**
     * Last time this file was viewed by the user (formatted RFC 3339 timestamp).
     */
    lastViewedByMeDate?: Date;
    /**
     * Contains details about the link URLs that clients are using to refer to this item.
     */
    linkShareMetadata?: FileLinkShareMetadata;
    /**
     * Deprecated.
     */
    markedViewedByMeDate?: Date;
    /**
     * An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    md5Checksum?: string;
    /**
     * The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.
     */
    mimeType?: string;
    /**
     * Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
     */
    modifiedByMeDate?: Date;
    /**
     * Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
     */
    modifiedDate?: Date;
    /**
     * A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
     */
    openWithLinks?: Record<string, string>;
    /**
     * The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Google Drive.
     */
    originalFilename?: string;
    /**
     * Whether the file is owned by the current user. Not populated for items in shared drives.
     */
    ownedByMe?: boolean;
    /**
     * Name(s) of the owner(s) of this file. Not populated for items in shared drives.
     */
    ownerNames?: string[];
    /**
     * The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
     */
    owners?: User[];
    /**
     * Collection of parent folders which contain this file.
     *
     * @remarks
     * If not specified as part of an insert request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests can also use the addParents and removeParents parameters to modify the parents list.
     */
    parents?: ParentReference[];
    /**
     * List of permission IDs for users with access to this file.
     */
    permissionIds?: string[];
    /**
     * The list of permissions for users with access to this file. Not populated for items in shared drives.
     */
    permissions?: Permission[];
    /**
     * The list of properties.
     */
    properties?: Property[];
    /**
     * The number of quota bytes used by this file.
     */
    quotaBytesUsed?: string;
    /**
     * A key needed to access the item via a shared link.
     */
    resourceKey?: string;
    /**
     * A link back to this file.
     */
    selfLink?: string;
    /**
     * The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha1Checksum?: string;
    /**
     * The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha256Checksum?: string;
    /**
     * Deprecated: use capabilities/canShare.
     */
    shareable?: boolean;
    /**
     * Whether the file has been shared. Not populated for items in shared drives.
     */
    shared?: boolean;
    /**
     * Time at which this file was shared with the user (formatted RFC 3339 timestamp).
     */
    sharedWithMeDate?: Date;
    /**
     * Information about a Drive user.
     */
    sharingUser?: User;
    /**
     * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
     */
    shortcutDetails?: FileShortcutDetails;
    /**
     * The list of spaces which contain the file. Supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string[];
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string;
    /**
     * A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
     */
    thumbnail?: FileThumbnail;
    /**
     * A short-lived link to the file's thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request.
     */
    thumbnailLink?: string;
    /**
     * The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string;
    /**
     * The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.
     */
    title?: string;
    /**
     * The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.
     */
    trashedDate?: Date;
    /**
     * Information about a Drive user.
     */
    trashingUser?: User;
    /**
     * A permission for a file.
     */
    userPermission?: Permission;
    /**
     * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
     */
    version?: string;
    /**
     * Metadata about video media. This will only be present for video types.
     */
    videoMediaMetadata?: FileVideoMediaMetadata;
    /**
     * A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
     */
    webContentLink?: string;
    /**
     * A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.
     */
    webViewLink?: string;
    /**
     * Whether writers can share the document with other users. Not populated for items in shared drives.
     */
    writersCanShare?: boolean;
}

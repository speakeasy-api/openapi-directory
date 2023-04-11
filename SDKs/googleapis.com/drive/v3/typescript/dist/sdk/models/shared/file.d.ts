import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRestriction } from "./contentrestriction";
import { Label } from "./label";
import { Permission, PermissionInput } from "./permission";
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
     * Whether the current user can change the securityUpdateEnabled field on link share metadata.
     */
    canChangeSecurityUpdateEnabled?: boolean;
    /**
     * Deprecated
     */
    canChangeViewersCanCopyContent?: boolean;
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
 * A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
 */
export declare class FileContentHintsThumbnail extends SpeakeasyBase {
    /**
     * The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).
     */
    image?: string;
    /**
     * The MIME type of the thumbnail.
     */
    mimeType?: string;
}
/**
 * Additional information about the content of the file. These fields are never populated in responses.
 */
export declare class FileContentHints extends SpeakeasyBase {
    /**
     * Text to be indexed for the file to improve fullText queries. This is limited to 128 KB in length and may contain HTML elements. For more information, see Manage file metadata.
     */
    indexableText?: string;
    /**
     * A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
     */
    thumbnail?: FileContentHintsThumbnail;
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
 * Additional metadata about image media, if available.
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
     * The date and time the photo was taken (EXIF DateTime).
     */
    time?: string;
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
 * An overview of the labels on the file.
 */
export declare class FileLabelInfo extends SpeakeasyBase {
    /**
     * The set of labels on the file as requested by the label IDs in the includeLabels parameter. By default, no labels are returned.
     */
    labels?: Label[];
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
 * Additional metadata about video media. This may not be available immediately upon upload.
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
     * A collection of arbitrary key-value pairs which are private to the requesting app.
     *
     * @remarks
     * Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
     */
    appProperties?: Record<string, string>;
    /**
     * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: FileCapabilities;
    /**
     * Additional information about the content of the file. These fields are never populated in responses.
     */
    contentHints?: FileContentHints;
    /**
     * Restrictions for accessing the content of the file. Only populated if such a restriction exists.
     */
    contentRestrictions?: ContentRestriction[];
    /**
     * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
     */
    copyRequiresWriterPermission?: boolean;
    /**
     * The time at which the file was created (RFC 3339 date-time).
     */
    createdTime?: Date;
    /**
     * A short description of the file.
     */
    description?: string;
    /**
     * ID of the shared drive the file resides in. Only populated for items in shared drives.
     */
    driveId?: string;
    /**
     * Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
     */
    explicitlyTrashed?: boolean;
    /**
     * The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
     */
    fileExtension?: string;
    /**
     * The color for a folder or shortcut to a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
     *
     * @remarks
     * If an unsupported color is specified, the closest color in the palette will be used instead.
     */
    folderColorRgb?: string;
    /**
     * The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
     *
     * @remarks
     * This is automatically updated when the name field changes, however it isn't cleared if the new name does not contain a valid extension.
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
     * The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.
     */
    headRevisionId?: string;
    /**
     * A static, unauthenticated link to the file's icon.
     */
    iconLink?: string;
    /**
     * The ID of the file.
     */
    id?: string;
    /**
     * Additional metadata about image media, if available.
     */
    imageMediaMetadata?: FileImageMediaMetadata;
    /**
     * Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#file".
     */
    kind?: string;
    /**
     * An overview of the labels on the file.
     */
    labelInfo?: FileLabelInfo;
    /**
     * Information about a Drive user.
     */
    lastModifyingUser?: User;
    /**
     * Contains details about the link URLs that clients are using to refer to this item.
     */
    linkShareMetadata?: FileLinkShareMetadata;
    /**
     * The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
     */
    md5Checksum?: string;
    /**
     * The MIME type of the file.
     *
     * @remarks
     * Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
     * If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.
     */
    mimeType?: string;
    /**
     * Whether the file has been modified by this user.
     */
    modifiedByMe?: boolean;
    /**
     * The last time the file was modified by the user (RFC 3339 date-time).
     */
    modifiedByMeTime?: Date;
    /**
     * The last time the file was modified by anyone (RFC 3339 date-time).
     *
     * @remarks
     * Note that setting modifiedTime will also update modifiedByMeTime for the user.
     */
    modifiedTime?: Date;
    /**
     * The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.
     */
    name?: string;
    /**
     * The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.
     */
    originalFilename?: string;
    /**
     * Whether the user owns the file. Not populated for items in shared drives.
     */
    ownedByMe?: boolean;
    /**
     * The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
     */
    owners?: User[];
    /**
     * The IDs of the parent folders which contain the file.
     *
     * @remarks
     * If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.
     */
    parents?: string[];
    /**
     * List of permission IDs for users with access to this file.
     */
    permissionIds?: string[];
    /**
     * The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.
     */
    permissions?: PermissionInput[];
    /**
     * A collection of arbitrary key-value pairs which are visible to all apps.
     *
     * @remarks
     * Entries with null values are cleared in update and copy requests.
     */
    properties?: Record<string, string>;
    /**
     * The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
     */
    quotaBytesUsed?: string;
    /**
     * A key needed to access the item via a shared link.
     */
    resourceKey?: string;
    /**
     * The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha1Checksum?: string;
    /**
     * The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha256Checksum?: string;
    /**
     * Whether the file has been shared. Not populated for items in shared drives.
     */
    shared?: boolean;
    /**
     * The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
     */
    sharedWithMeTime?: Date;
    /**
     * Information about a Drive user.
     */
    sharingUser?: User;
    /**
     * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
     */
    shortcutDetails?: FileShortcutDetails;
    /**
     * The size of the file's content in bytes. This field is populated for files with binary content stored in Google Drive and for Docs Editors files; it is not populated for shortcuts or folders.
     */
    size?: string;
    /**
     * The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string[];
    /**
     * Whether the user has starred the file.
     */
    starred?: boolean;
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string;
    /**
     * A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request.
     */
    thumbnailLink?: string;
    /**
     * The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string;
    /**
     * Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
     */
    trashed?: boolean;
    /**
     * The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
     */
    trashedTime?: Date;
    /**
     * Information about a Drive user.
     */
    trashingUser?: User;
    /**
     * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
     */
    version?: string;
    /**
     * Additional metadata about video media. This may not be available immediately upon upload.
     */
    videoMediaMetadata?: FileVideoMediaMetadata;
    /**
     * Whether the file has been viewed by this user.
     */
    viewedByMe?: boolean;
    /**
     * The last time the file was viewed by the user (RFC 3339 date-time).
     */
    viewedByMeTime?: Date;
    /**
     * Deprecated - use copyRequiresWriterPermission instead.
     */
    viewersCanCopyContent?: boolean;
    /**
     * A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
     */
    webContentLink?: string;
    /**
     * A link for opening the file in a relevant Google editor or viewer in a browser.
     */
    webViewLink?: string;
    /**
     * Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.
     */
    writersCanShare?: boolean;
}
/**
 * The metadata for a file.
 */
export declare class File extends SpeakeasyBase {
    /**
     * A collection of arbitrary key-value pairs which are private to the requesting app.
     *
     * @remarks
     * Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.
     */
    appProperties?: Record<string, string>;
    /**
     * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: FileCapabilities;
    /**
     * Additional information about the content of the file. These fields are never populated in responses.
     */
    contentHints?: FileContentHints;
    /**
     * Restrictions for accessing the content of the file. Only populated if such a restriction exists.
     */
    contentRestrictions?: ContentRestriction[];
    /**
     * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
     */
    copyRequiresWriterPermission?: boolean;
    /**
     * The time at which the file was created (RFC 3339 date-time).
     */
    createdTime?: Date;
    /**
     * A short description of the file.
     */
    description?: string;
    /**
     * ID of the shared drive the file resides in. Only populated for items in shared drives.
     */
    driveId?: string;
    /**
     * Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.
     */
    explicitlyTrashed?: boolean;
    /**
     * Links for exporting Docs Editors files to specific formats.
     */
    exportLinks?: Record<string, string>;
    /**
     * The final component of fullFileExtension. This is only available for files with binary content in Google Drive.
     */
    fileExtension?: string;
    /**
     * The color for a folder or shortcut to a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
     *
     * @remarks
     * If an unsupported color is specified, the closest color in the palette will be used instead.
     */
    folderColorRgb?: string;
    /**
     * The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
     *
     * @remarks
     * This is automatically updated when the name field changes, however it isn't cleared if the new name does not contain a valid extension.
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
     * The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.
     */
    headRevisionId?: string;
    /**
     * A static, unauthenticated link to the file's icon.
     */
    iconLink?: string;
    /**
     * The ID of the file.
     */
    id?: string;
    /**
     * Additional metadata about image media, if available.
     */
    imageMediaMetadata?: FileImageMediaMetadata;
    /**
     * Whether the file was created or opened by the requesting app.
     */
    isAppAuthorized?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#file".
     */
    kind?: string;
    /**
     * An overview of the labels on the file.
     */
    labelInfo?: FileLabelInfo;
    /**
     * Information about a Drive user.
     */
    lastModifyingUser?: User;
    /**
     * Contains details about the link URLs that clients are using to refer to this item.
     */
    linkShareMetadata?: FileLinkShareMetadata;
    /**
     * The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.
     */
    md5Checksum?: string;
    /**
     * The MIME type of the file.
     *
     * @remarks
     * Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
     * If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.
     */
    mimeType?: string;
    /**
     * Whether the file has been modified by this user.
     */
    modifiedByMe?: boolean;
    /**
     * The last time the file was modified by the user (RFC 3339 date-time).
     */
    modifiedByMeTime?: Date;
    /**
     * The last time the file was modified by anyone (RFC 3339 date-time).
     *
     * @remarks
     * Note that setting modifiedTime will also update modifiedByMeTime for the user.
     */
    modifiedTime?: Date;
    /**
     * The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.
     */
    name?: string;
    /**
     * The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.
     */
    originalFilename?: string;
    /**
     * Whether the user owns the file. Not populated for items in shared drives.
     */
    ownedByMe?: boolean;
    /**
     * The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.
     */
    owners?: User[];
    /**
     * The IDs of the parent folders which contain the file.
     *
     * @remarks
     * If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.
     */
    parents?: string[];
    /**
     * List of permission IDs for users with access to this file.
     */
    permissionIds?: string[];
    /**
     * The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.
     */
    permissions?: Permission[];
    /**
     * A collection of arbitrary key-value pairs which are visible to all apps.
     *
     * @remarks
     * Entries with null values are cleared in update and copy requests.
     */
    properties?: Record<string, string>;
    /**
     * The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.
     */
    quotaBytesUsed?: string;
    /**
     * A key needed to access the item via a shared link.
     */
    resourceKey?: string;
    /**
     * The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha1Checksum?: string;
    /**
     * The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it isn't populated for Docs Editors or shortcut files.
     */
    sha256Checksum?: string;
    /**
     * Whether the file has been shared. Not populated for items in shared drives.
     */
    shared?: boolean;
    /**
     * The time at which the file was shared with the user, if applicable (RFC 3339 date-time).
     */
    sharedWithMeTime?: Date;
    /**
     * Information about a Drive user.
     */
    sharingUser?: User;
    /**
     * Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
     */
    shortcutDetails?: FileShortcutDetails;
    /**
     * The size of the file's content in bytes. This field is populated for files with binary content stored in Google Drive and for Docs Editors files; it is not populated for shortcuts or folders.
     */
    size?: string;
    /**
     * The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.
     */
    spaces?: string[];
    /**
     * Whether the user has starred the file.
     */
    starred?: boolean;
    /**
     * Deprecated - use driveId instead.
     */
    teamDriveId?: string;
    /**
     * A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request.
     */
    thumbnailLink?: string;
    /**
     * The thumbnail version for use in thumbnail cache invalidation.
     */
    thumbnailVersion?: string;
    /**
     * Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
     */
    trashed?: boolean;
    /**
     * The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.
     */
    trashedTime?: Date;
    /**
     * Information about a Drive user.
     */
    trashingUser?: User;
    /**
     * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.
     */
    version?: string;
    /**
     * Additional metadata about video media. This may not be available immediately upon upload.
     */
    videoMediaMetadata?: FileVideoMediaMetadata;
    /**
     * Whether the file has been viewed by this user.
     */
    viewedByMe?: boolean;
    /**
     * The last time the file was viewed by the user (RFC 3339 date-time).
     */
    viewedByMeTime?: Date;
    /**
     * Deprecated - use copyRequiresWriterPermission instead.
     */
    viewersCanCopyContent?: boolean;
    /**
     * A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.
     */
    webContentLink?: string;
    /**
     * A link for opening the file in a relevant Google editor or viewer in a browser.
     */
    webViewLink?: string;
    /**
     * Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.
     */
    writersCanShare?: boolean;
}

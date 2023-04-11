import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppIcons extends SpeakeasyBase {
    /**
     * Category of the icon. Allowed values are:
     *
     * @remarks
     * - application - icon for the application
     * - document - icon for a file associated with the app
     * - documentShared - icon for a shared file associated with the app
     */
    category?: string;
    /**
     * URL for the icon.
     */
    iconUrl?: string;
    /**
     * Size of the icon. Represented as the maximum of the width and height.
     */
    size?: number;
}
/**
 * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
 */
export declare class App extends SpeakeasyBase {
    /**
     * Whether the app is authorized to access data on the user's Drive.
     */
    authorized?: boolean;
    /**
     * The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.
     */
    createInFolderTemplate?: string;
    /**
     * The url to create a new file with this app.
     */
    createUrl?: string;
    /**
     * Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.
     */
    hasDriveWideScope?: boolean;
    /**
     * The various icons for the app.
     */
    icons?: AppIcons[];
    /**
     * The ID of the app.
     */
    id?: string;
    /**
     * Whether the app is installed.
     */
    installed?: boolean;
    /**
     * This is always drive#app.
     */
    kind?: string;
    /**
     * A long description of the app.
     */
    longDescription?: string;
    /**
     * The name of the app.
     */
    name?: string;
    /**
     * The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
     */
    objectType?: string;
    /**
     * The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open Files  for the full documentation.
     */
    openUrlTemplate?: string;
    /**
     * The list of primary file extensions.
     */
    primaryFileExtensions?: string[];
    /**
     * The list of primary mime types.
     */
    primaryMimeTypes?: string[];
    /**
     * The ID of the product listing for this app.
     */
    productId?: string;
    /**
     * A link to the product listing for this app.
     */
    productUrl?: string;
    /**
     * The list of secondary file extensions.
     */
    secondaryFileExtensions?: string[];
    /**
     * The list of secondary mime types.
     */
    secondaryMimeTypes?: string[];
    /**
     * A short description of the app.
     */
    shortDescription?: string;
    /**
     * Whether this app supports creating new objects.
     */
    supportsCreate?: boolean;
    /**
     * Whether this app supports importing from Docs Editors.
     */
    supportsImport?: boolean;
    /**
     * Whether this app supports opening more than one file.
     */
    supportsMultiOpen?: boolean;
    /**
     * Whether this app supports creating new files when offline.
     */
    supportsOfflineCreate?: boolean;
    /**
     * Whether the app is selected as the default handler for the types it supports.
     */
    useByDefault?: boolean;
}

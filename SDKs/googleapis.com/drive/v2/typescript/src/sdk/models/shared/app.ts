/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AppIcons extends SpeakeasyBase {
  /**
   * Category of the icon. Allowed values are:
   *
   * @remarks
   * - application - icon for the application
   * - document - icon for a file associated with the app
   * - documentShared - icon for a shared file associated with the app
   */
  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: string;

  /**
   * URL for the icon.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "iconUrl" })
  iconUrl?: string;

  /**
   * Size of the icon. Represented as the maximum of the width and height.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;
}

/**
 * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
 */
export class App extends SpeakeasyBase {
  /**
   * Whether the app is authorized to access data on the user's Drive.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "authorized" })
  authorized?: boolean;

  /**
   * The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createInFolderTemplate" })
  createInFolderTemplate?: string;

  /**
   * The url to create a new file with this app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createUrl" })
  createUrl?: string;

  /**
   * Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hasDriveWideScope" })
  hasDriveWideScope?: boolean;

  /**
   * The various icons for the app.
   */
  @SpeakeasyMetadata({ elemType: AppIcons })
  @Expose({ name: "icons" })
  @Type(() => AppIcons)
  icons?: AppIcons[];

  /**
   * The ID of the app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Whether the app is installed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "installed" })
  installed?: boolean;

  /**
   * This is always drive#app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * A long description of the app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "longDescription" })
  longDescription?: string;

  /**
   * The name of the app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "objectType" })
  objectType?: string;

  /**
   * The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open Files  for the full documentation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "openUrlTemplate" })
  openUrlTemplate?: string;

  /**
   * The list of primary file extensions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "primaryFileExtensions" })
  primaryFileExtensions?: string[];

  /**
   * The list of primary mime types.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "primaryMimeTypes" })
  primaryMimeTypes?: string[];

  /**
   * The ID of the product listing for this app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "productId" })
  productId?: string;

  /**
   * A link to the product listing for this app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "productUrl" })
  productUrl?: string;

  /**
   * The list of secondary file extensions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "secondaryFileExtensions" })
  secondaryFileExtensions?: string[];

  /**
   * The list of secondary mime types.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "secondaryMimeTypes" })
  secondaryMimeTypes?: string[];

  /**
   * A short description of the app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "shortDescription" })
  shortDescription?: string;

  /**
   * Whether this app supports creating new objects.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supportsCreate" })
  supportsCreate?: boolean;

  /**
   * Whether this app supports importing from Docs Editors.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supportsImport" })
  supportsImport?: boolean;

  /**
   * Whether this app supports opening more than one file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supportsMultiOpen" })
  supportsMultiOpen?: boolean;

  /**
   * Whether this app supports creating new files when offline.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supportsOfflineCreate" })
  supportsOfflineCreate?: boolean;

  /**
   * Whether the app is selected as the default handler for the types it supports.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "useByDefault" })
  useByDefault?: boolean;
}

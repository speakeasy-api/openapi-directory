import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for each folder in the share settings.
 */
export declare class ShareSettingsFolderConfig extends SpeakeasyBase {
    /**
     * The folder ID, should be same as the key of this folder config in the parent map. Folder id should be a string of number, and without "folders/" prefix.
     */
    folderId?: string;
}

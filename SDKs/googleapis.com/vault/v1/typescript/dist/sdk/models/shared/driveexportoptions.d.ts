import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for Drive exports.
 */
export declare class DriveExportOptions extends SpeakeasyBase {
    /**
     * To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**.
     */
    includeAccessInfo?: boolean;
}

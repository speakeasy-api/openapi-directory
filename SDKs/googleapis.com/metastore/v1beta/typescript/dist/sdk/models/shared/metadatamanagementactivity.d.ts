import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataExport } from "./metadataexport";
import { Restore } from "./restore";
/**
 * The metadata management activities of the metastore service.
 */
export declare class MetadataManagementActivity extends SpeakeasyBase {
    /**
     * Output only. The latest metadata exports of the metastore service.
     */
    metadataExports?: MetadataExport[];
    /**
     * Output only. The latest restores of the metastore service.
     */
    restores?: Restore[];
}

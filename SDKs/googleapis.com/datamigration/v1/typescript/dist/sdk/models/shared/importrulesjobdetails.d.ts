import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The requested file format.
 */
export declare enum ImportRulesJobDetailsFileFormatEnum {
    ImportRulesFileFormatUnspecified = "IMPORT_RULES_FILE_FORMAT_UNSPECIFIED",
    ImportRulesFileFormatHarbourBridgeSessionFile = "IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE",
    ImportRulesFileFormatOratopgConfigFile = "IMPORT_RULES_FILE_FORMAT_ORATOPG_CONFIG_FILE"
}
/**
 * Details regarding an Import Rules background job.
 */
export declare class ImportRulesJobDetails extends SpeakeasyBase {
    /**
     * The requested file format.
     */
    fileFormat?: ImportRulesJobDetailsFileFormatEnum;
    /**
     * File names used for the import rules job.
     */
    files?: string[];
}

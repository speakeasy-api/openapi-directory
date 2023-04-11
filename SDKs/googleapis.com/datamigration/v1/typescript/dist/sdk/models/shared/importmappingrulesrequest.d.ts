import { SpeakeasyBase } from "../../../internal/utils";
import { RulesFile } from "./rulesfile";
/**
 * The format of the rules content file.
 */
export declare enum ImportMappingRulesRequestRulesFormatEnum {
    ImportRulesFileFormatUnspecified = "IMPORT_RULES_FILE_FORMAT_UNSPECIFIED",
    ImportRulesFileFormatHarbourBridgeSessionFile = "IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE",
    ImportRulesFileFormatOratopgConfigFile = "IMPORT_RULES_FILE_FORMAT_ORATOPG_CONFIG_FILE"
}
/**
 * Request message for 'ImportMappingRules' request.
 */
export declare class ImportMappingRulesRequest extends SpeakeasyBase {
    /**
     * Should the conversion workspace be committed automatically after the import operation.
     */
    autoCommit?: boolean;
    /**
     * One or more rules files.
     */
    rulesFiles?: RulesFile[];
    /**
     * The format of the rules content file.
     */
    rulesFormat?: ImportMappingRulesRequestRulesFormatEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { StatementTemplate } from "./statementtemplate";
/**
 * Message used to check for the existence of multiple digital asset links within a single RPC.
 */
export declare class BulkCheckRequest extends SpeakeasyBase {
    /**
     * Same configuration as in Check request, all statements checks will use same configurations.
     */
    allowGoogleInternalDataSources?: boolean;
    /**
     * If specified, will be used in any given template statement that doesn’t specify a relation.
     */
    defaultRelation?: string;
    /**
     * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
     */
    defaultSource?: Asset;
    /**
     * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
     */
    defaultTarget?: Asset;
    /**
     * Same configuration as in Check request, all statements checks will use same configurations.
     */
    skipCacheLookup?: boolean;
    /**
     * List of statements to check. For each statement, you can omit a field if the corresponding default_* field below was supplied. Minimum 1 statement; maximum 1,000 statements. Any additional statements will be ignored.
     */
    statements?: StatementTemplate[];
}

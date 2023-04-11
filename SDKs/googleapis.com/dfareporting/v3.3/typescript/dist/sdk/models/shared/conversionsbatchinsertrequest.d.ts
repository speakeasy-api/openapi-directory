import { SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { EncryptionInfo } from "./encryptioninfo";
/**
 * Insert Conversions Request.
 */
export declare class ConversionsBatchInsertRequest extends SpeakeasyBase {
    /**
     * The set of conversions to insert.
     */
    conversions?: Conversion[];
    /**
     * A description of how user IDs are encrypted.
     */
    encryptionInfo?: EncryptionInfo;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest".
     */
    kind?: string;
}

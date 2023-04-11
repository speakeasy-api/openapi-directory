import { SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { EncryptionInfo } from "./encryptioninfo";
/**
 * Update Conversions Request.
 */
export declare class ConversionsBatchUpdateRequest extends SpeakeasyBase {
    /**
     * The set of conversions to update.
     */
    conversions?: Conversion[];
    /**
     * A description of how user IDs are encrypted.
     */
    encryptionInfo?: EncryptionInfo;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest".
     */
    kind?: string;
}

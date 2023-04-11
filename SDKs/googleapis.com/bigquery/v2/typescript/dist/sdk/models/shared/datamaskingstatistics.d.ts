import { SpeakeasyBase } from "../../../internal/utils";
export declare class DataMaskingStatistics extends SpeakeasyBase {
    /**
     * [Output-only] [Preview] Whether any accessed data was protected by data masking. The actual evaluation is done by accessStats.masked_field_count > 0. Since this is only used for the discovery_doc generation purpose, as long as the type (boolean) matches, client library can leverage this. The actual evaluation of the variable is done else-where.
     */
    dataMaskingApplied?: boolean;
}

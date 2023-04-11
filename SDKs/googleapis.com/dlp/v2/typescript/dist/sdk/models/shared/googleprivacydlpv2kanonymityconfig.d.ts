import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2EntityId } from "./googleprivacydlpv2entityid";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * k-anonymity metric, used for analysis of reidentification risk.
 */
export declare class GooglePrivacyDlpV2KAnonymityConfig extends SpeakeasyBase {
    /**
     * An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.
     */
    entityId?: GooglePrivacyDlpV2EntityId;
    /**
     * Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field.
     */
    quasiIds?: GooglePrivacyDlpV2FieldId[];
}

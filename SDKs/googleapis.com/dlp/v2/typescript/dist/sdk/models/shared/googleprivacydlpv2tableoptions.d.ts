import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * Instructions regarding the table content being inspected.
 */
export declare class GooglePrivacyDlpV2TableOptions extends SpeakeasyBase {
    /**
     * The columns that are the primary keys for table objects included in ContentItem. A copy of this cell's value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided.
     */
    identifyingFields?: GooglePrivacyDlpV2FieldId[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2RecordKey } from "./googleprivacydlpv2recordkey";
import { GooglePrivacyDlpV2TableLocation } from "./googleprivacydlpv2tablelocation";
/**
 * Location of a finding within a row or record.
 */
export declare class GooglePrivacyDlpV2RecordLocation extends SpeakeasyBase {
    /**
     * General identifier of a data field in a storage service.
     */
    fieldId?: GooglePrivacyDlpV2FieldId;
    /**
     * Message for a unique key indicating a record that contains a finding.
     */
    recordKey?: GooglePrivacyDlpV2RecordKey;
    /**
     * Location of a finding within a table.
     */
    tableLocation?: GooglePrivacyDlpV2TableLocation;
}

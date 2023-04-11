import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryKey } from "./googleprivacydlpv2bigquerykey";
import { GooglePrivacyDlpV2DatastoreKey } from "./googleprivacydlpv2datastorekey";
/**
 * Message for a unique key indicating a record that contains a finding.
 */
export declare class GooglePrivacyDlpV2RecordKey extends SpeakeasyBase {
    /**
     * Row key for identifying a record in BigQuery table.
     */
    bigQueryKey?: GooglePrivacyDlpV2BigQueryKey;
    /**
     * Record key for a finding in Cloud Datastore.
     */
    datastoreKey?: GooglePrivacyDlpV2DatastoreKey;
    /**
     * Values of identifying columns in the given row. Order of values matches the order of `identifying_fields` specified in the scanning request.
     */
    idValues?: string[];
}

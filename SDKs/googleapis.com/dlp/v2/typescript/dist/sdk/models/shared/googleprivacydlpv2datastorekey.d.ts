import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Key } from "./googleprivacydlpv2key";
/**
 * Record key for a finding in Cloud Datastore.
 */
export declare class GooglePrivacyDlpV2DatastoreKey extends SpeakeasyBase {
    /**
     * A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
     */
    entityKey?: GooglePrivacyDlpV2Key;
}

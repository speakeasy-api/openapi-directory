import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KindExpression } from "./googleprivacydlpv2kindexpression";
import { GooglePrivacyDlpV2PartitionId } from "./googleprivacydlpv2partitionid";
/**
 * Options defining a data set within Google Cloud Datastore.
 */
export declare class GooglePrivacyDlpV2DatastoreOptions extends SpeakeasyBase {
    /**
     * A representation of a Datastore kind.
     */
    kind?: GooglePrivacyDlpV2KindExpression;
    /**
     * Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.
     */
    partitionId?: GooglePrivacyDlpV2PartitionId;
}

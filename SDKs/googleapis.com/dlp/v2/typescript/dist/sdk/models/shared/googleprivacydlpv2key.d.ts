import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2PartitionId } from "./googleprivacydlpv2partitionid";
import { GooglePrivacyDlpV2PathElement } from "./googleprivacydlpv2pathelement";
/**
 * A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
 */
export declare class GooglePrivacyDlpV2Key extends SpeakeasyBase {
    /**
     * Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.
     */
    partitionId?: GooglePrivacyDlpV2PartitionId;
    /**
     * The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. A path can never be empty, and a path can have at most 100 elements.
     */
    path?: GooglePrivacyDlpV2PathElement[];
}

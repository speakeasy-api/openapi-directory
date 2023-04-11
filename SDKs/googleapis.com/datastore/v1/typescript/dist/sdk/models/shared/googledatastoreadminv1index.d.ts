import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDatastoreAdminV1IndexedProperty } from "./googledatastoreadminv1indexedproperty";
/**
 * Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED.
 */
export declare enum GoogleDatastoreAdminV1IndexAncestorEnum {
    AncestorModeUnspecified = "ANCESTOR_MODE_UNSPECIFIED",
    None = "NONE",
    AllAncestors = "ALL_ANCESTORS"
}
/**
 * Output only. The state of the index.
 */
export declare enum GoogleDatastoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Error = "ERROR"
}
/**
 * Datastore composite index definition.
 */
export declare class GoogleDatastoreAdminV1Index extends SpeakeasyBase {
    /**
     * Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED.
     */
    ancestor?: GoogleDatastoreAdminV1IndexAncestorEnum;
    /**
     * Output only. The resource ID of the index.
     */
    indexId?: string;
    /**
     * Required. The entity kind to which this index applies.
     */
    kind?: string;
    /**
     * Output only. Project ID.
     */
    projectId?: string;
    /**
     * Required. An ordered sequence of property names and their index attributes. Requires: * A maximum of 100 properties.
     */
    properties?: GoogleDatastoreAdminV1IndexedProperty[];
    /**
     * Output only. The state of the index.
     */
    state?: GoogleDatastoreAdminV1IndexStateEnum;
}
/**
 * Datastore composite index definition.
 */
export declare class GoogleDatastoreAdminV1IndexInput extends SpeakeasyBase {
    /**
     * Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED.
     */
    ancestor?: GoogleDatastoreAdminV1IndexAncestorEnum;
    /**
     * Required. The entity kind to which this index applies.
     */
    kind?: string;
    /**
     * Required. An ordered sequence of property names and their index attributes. Requires: * A maximum of 100 properties.
     */
    properties?: GoogleDatastoreAdminV1IndexedProperty[];
}

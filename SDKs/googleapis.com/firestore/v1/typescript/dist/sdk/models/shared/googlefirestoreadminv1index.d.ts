import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1IndexField } from "./googlefirestoreadminv1indexfield";
/**
 * The API scope supported by this index.
 */
export declare enum GoogleFirestoreAdminV1IndexApiScopeEnum {
    AnyApi = "ANY_API",
    DatastoreModeApi = "DATASTORE_MODE_API"
}
/**
 * Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.
 */
export declare enum GoogleFirestoreAdminV1IndexQueryScopeEnum {
    QueryScopeUnspecified = "QUERY_SCOPE_UNSPECIFIED",
    Collection = "COLLECTION",
    CollectionGroup = "COLLECTION_GROUP",
    CollectionRecursive = "COLLECTION_RECURSIVE"
}
/**
 * Output only. The serving state of the index.
 */
export declare enum GoogleFirestoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    NeedsRepair = "NEEDS_REPAIR"
}
/**
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
 */
export declare class GoogleFirestoreAdminV1Index extends SpeakeasyBase {
    /**
     * The API scope supported by this index.
     */
    apiScope?: GoogleFirestoreAdminV1IndexApiScopeEnum;
    /**
     * The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.
     */
    fields?: GoogleFirestoreAdminV1IndexField[];
    /**
     * Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty.
     */
    name?: string;
    /**
     * Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.
     */
    queryScope?: GoogleFirestoreAdminV1IndexQueryScopeEnum;
    /**
     * Output only. The serving state of the index.
     */
    state?: GoogleFirestoreAdminV1IndexStateEnum;
}

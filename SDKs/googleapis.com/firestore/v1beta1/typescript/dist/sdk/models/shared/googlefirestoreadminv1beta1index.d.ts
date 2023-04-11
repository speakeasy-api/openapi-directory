import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta1IndexField } from "./googlefirestoreadminv1beta1indexfield";
/**
 * The state of the index. Output only.
 */
export declare enum GoogleFirestoreAdminV1beta1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Error = "ERROR"
}
/**
 * An index definition.
 */
export declare class GoogleFirestoreAdminV1beta1Index extends SpeakeasyBase {
    /**
     * The collection ID to which this index applies. Required.
     */
    collectionId?: string;
    /**
     * The fields to index.
     */
    fields?: GoogleFirestoreAdminV1beta1IndexField[];
    /**
     * The resource name of the index. Output only.
     */
    name?: string;
    /**
     * The state of the index. Output only.
     */
    state?: GoogleFirestoreAdminV1beta1IndexStateEnum;
}

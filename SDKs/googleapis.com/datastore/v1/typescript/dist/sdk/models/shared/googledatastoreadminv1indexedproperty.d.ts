import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The indexed property's direction. Must not be DIRECTION_UNSPECIFIED.
 */
export declare enum GoogleDatastoreAdminV1IndexedPropertyDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * A property of an index.
 */
export declare class GoogleDatastoreAdminV1IndexedProperty extends SpeakeasyBase {
    /**
     * Required. The indexed property's direction. Must not be DIRECTION_UNSPECIFIED.
     */
    direction?: GoogleDatastoreAdminV1IndexedPropertyDirectionEnum;
    /**
     * Required. The property name to index.
     */
    name?: string;
}

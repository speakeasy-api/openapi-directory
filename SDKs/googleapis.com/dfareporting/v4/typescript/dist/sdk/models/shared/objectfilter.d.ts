import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.
 */
export declare enum ObjectFilterStatusEnum {
    None = "NONE",
    Assigned = "ASSIGNED",
    All = "ALL"
}
/**
 * Object Filter.
 */
export declare class ObjectFilter extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter".
     */
    kind?: string;
    /**
     * Applicable when status is ASSIGNED. The user has access to objects with these object IDs.
     */
    objectIds?: string[];
    /**
     * Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.
     */
    status?: ObjectFilterStatusEnum;
}

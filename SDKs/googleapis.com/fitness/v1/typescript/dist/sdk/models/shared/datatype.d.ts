import { SpeakeasyBase } from "../../../internal/utils";
import { DataTypeField } from "./datatypefield";
export declare class DataType extends SpeakeasyBase {
    /**
     * A field represents one dimension of a data type.
     */
    field?: DataTypeField[];
    /**
     * Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform.
     */
    name?: string;
}

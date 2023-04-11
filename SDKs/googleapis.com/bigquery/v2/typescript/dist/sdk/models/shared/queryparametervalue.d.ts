import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryParameterValue extends SpeakeasyBase {
    /**
     * [Optional] The array values, if this is an array type.
     */
    arrayValues?: QueryParameterValue[];
    /**
     * [Optional] The struct field values, in order of the struct type's declaration.
     */
    structValues?: Record<string, QueryParameterValue>;
    /**
     * [Optional] The value of this value, if a simple scalar type.
     */
    value?: string;
}

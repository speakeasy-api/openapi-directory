import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryParameterTypeStructTypes extends SpeakeasyBase {
    /**
     * [Optional] Human-oriented description of the field.
     */
    description?: string;
    /**
     * [Optional] The name of this field.
     */
    name?: string;
    type?: QueryParameterType;
}
export declare class QueryParameterType extends SpeakeasyBase {
    arrayType?: QueryParameterType;
    /**
     * [Optional] The types of the fields of this struct, in order, if this is a struct.
     */
    structTypes?: QueryParameterTypeStructTypes[];
    /**
     * [Required] The top level type of this field.
     */
    type?: string;
}

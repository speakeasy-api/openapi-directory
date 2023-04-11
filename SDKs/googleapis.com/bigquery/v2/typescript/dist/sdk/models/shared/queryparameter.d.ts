import { SpeakeasyBase } from "../../../internal/utils";
import { QueryParameterType } from "./queryparametertype";
import { QueryParameterValue } from "./queryparametervalue";
export declare class QueryParameter extends SpeakeasyBase {
    /**
     * [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query.
     */
    name?: string;
    parameterType?: QueryParameterType;
    parameterValue?: QueryParameterValue;
}

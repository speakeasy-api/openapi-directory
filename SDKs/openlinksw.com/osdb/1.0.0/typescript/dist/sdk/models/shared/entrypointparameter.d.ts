import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the parameter, indicating its location in the HTTP request.
 */
export declare enum EntryPointParameterTypeEnum {
    Query = "query",
    Header = "header",
    Uri = "uri",
    Path = "path",
    Body = "body"
}
export declare class EntryPointParameter extends SpeakeasyBase {
    /**
     * A short description of the parameter for use in the OSDB Action Console. Optional - may be null.
     */
    description: string;
    /**
     * The parameter's display name in the OSDB Action Console. Optional - may be null.
     */
    displayName: string;
    /**
     * The parameter name as present in the HTTP request. e.g. the key name in a query string key-value pair.
     */
    parameterName: string;
    /**
     * If the parameter accepts only a limited set of values, the allowed set of values. Null if not applicable.
     */
    permittedValues: string[];
    /**
     * A flag indicating if the parameter is optional.
     */
    required: number;
    /**
     * The type of the parameter, indicating its location in the HTTP request.
     */
    type: EntryPointParameterTypeEnum;
}

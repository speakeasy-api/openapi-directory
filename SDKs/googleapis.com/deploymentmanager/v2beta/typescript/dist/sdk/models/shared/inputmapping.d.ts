import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The location where this mapping applies.
 */
export declare enum InputMappingLocationEnum {
    Unknown = "UNKNOWN",
    Path = "PATH",
    Query = "QUERY",
    Body = "BODY",
    Header = "HEADER"
}
/**
 * InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
 */
export declare class InputMapping extends SpeakeasyBase {
    /**
     * The name of the field that is going to be injected.
     */
    fieldName?: string;
    /**
     * The location where this mapping applies.
     */
    location?: InputMappingLocationEnum;
    /**
     * Regex to evaluate on method to decide if input applies.
     */
    methodMatch?: string;
    /**
     * A jsonPath expression to select an element.
     */
    value?: string;
}

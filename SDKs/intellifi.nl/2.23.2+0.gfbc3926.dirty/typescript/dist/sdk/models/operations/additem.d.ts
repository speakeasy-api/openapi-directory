import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddItemRequestBody3Input extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: shared.ItemProtocolEnum;
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: shared.TechnologyEnum;
    /**
     * Type of item.
     */
    type?: shared.ItemTypeEnum;
}
export declare class AddItemRequestBody2Input extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: shared.ItemProtocolEnum;
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: shared.TechnologyEnum;
    /**
     * Type of item.
     */
    type?: shared.ItemTypeEnum;
}
export declare class AddItemRequestBody1Input extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: shared.ItemProtocolEnum;
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: shared.TechnologyEnum;
    /**
     * Type of item.
     */
    type?: shared.ItemTypeEnum;
}
export declare class AddItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the newly added resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

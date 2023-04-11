import { SpeakeasyBase } from "../../../internal/utils";
import { FieldTypeDefinition } from "./fieldtypedefinition";
export declare enum InputFieldDefinitionSupportedValueTypesEnum {
    StaticValue = "STATIC_VALUE",
    ObjectProperty = "OBJECT_PROPERTY",
    FieldData = "FIELD_DATA"
}
/**
 * Configuration for an input field on the custom action
 */
export declare class InputFieldDefinition extends SpeakeasyBase {
    /**
     * Whether the field is required for the custom action to be valid
     */
    isRequired: boolean;
    /**
     * Controls what kind of input a customer can use to specify the field value. Must contain exactly one of `STATIC_VALUE` or `OBJECT_PROPERTY`. If `STATIC_VALUE`, the customer will be able to choose a value when configuring the custom action; if `OBJECT_PROPERTY`, the customer will be able to choose a property from the enrolled workflow object that the field value will be copied from. In the future we may support more than one input control type here.
     */
    supportedValueTypes?: InputFieldDefinitionSupportedValueTypesEnum[];
    /**
     * The data type expected by an input field.
     */
    typeDefinition: FieldTypeDefinition;
}

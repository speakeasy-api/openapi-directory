import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum {
    Default = "DEFAULT",
    StringMultiLine = "STRING_MULTI_LINE",
    NumberSlider = "NUMBER_SLIDER",
    BooleanToggle = "BOOLEAN_TOGGLE"
}
export declare enum EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum {
    DefaultNotParameterName = "DEFAULT_NOT_PARAMETER_NAME",
    IsParameterName = "IS_PARAMETER_NAME",
    KeyIsParameterName = "KEY_IS_PARAMETER_NAME",
    ValueIsParameterName = "VALUE_IS_PARAMETER_NAME"
}
export declare class EnterpriseCrmEventbusProtoParamSpecEntryConfig extends SpeakeasyBase {
    /**
     * A short phrase to describe what this parameter contains.
     */
    descriptivePhrase?: string;
    /**
     * Detailed help text for this parameter containing information not provided elsewhere. For example, instructions on how to migrate from a deprecated parameter.
     */
    helpText?: string;
    /**
     * Whether the default value is hidden in the UI.
     */
    hideDefaultValue?: boolean;
    inputDisplayOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum;
    /**
     * Whether this field is hidden in the UI.
     */
    isHidden?: boolean;
    /**
     * A user-friendly label for the parameter.
     */
    label?: string;
    parameterNameOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum;
    /**
     * A user-friendly label for subSection under which the parameter will be displayed.
     */
    subSectionLabel?: string;
    /**
     * Placeholder text which will appear in the UI input form for this parameter.
     */
    uiPlaceholderText?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoParameterValueType } from "./enterprisecrmeventbusprotoparametervaluetype";
/**
 * Key-value pair of EventBus parameters.
 */
export declare class EnterpriseCrmEventbusProtoParameterEntry extends SpeakeasyBase {
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.
     */
    key?: string;
    /**
     * LINT.IfChange To support various types of parameter values. Next available id: 14
     */
    value?: EnterpriseCrmEventbusProtoParameterValueType;
}

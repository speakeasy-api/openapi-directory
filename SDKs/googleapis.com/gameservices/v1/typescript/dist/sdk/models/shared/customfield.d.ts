import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.
 */
export declare class CustomField extends SpeakeasyBase {
    /**
     * Name is the field name.
     */
    name?: string;
    /**
     * Value is the field value. It is important that in contrast to the CounterOptions.field, the value here is a constant that is not derived from the IAMContext.
     */
    value?: string;
}

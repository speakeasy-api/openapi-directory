import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
/**
 * Key-value pair of EventBus property.
 */
export declare class EnterpriseCrmEventbusProtoPropertyEntry extends SpeakeasyBase {
    /**
     * Key is used to retrieve the corresponding property value. This should be unique for a given fired event. The Tasks should be aware of the keys used while firing the events for them to be able to retrieve the values.
     */
    key?: string;
    /**
     * Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
     */
    value?: EnterpriseCrmEventbusProtoValueType;
}

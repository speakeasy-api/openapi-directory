import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoPropertyEntry } from "./enterprisecrmeventbusprotopropertyentry";
/**
 * LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus.
 */
export declare class EnterpriseCrmEventbusProtoEventBusProperties extends SpeakeasyBase {
    /**
     * An unordered list of property entries.
     */
    properties?: EnterpriseCrmEventbusProtoPropertyEntry[];
}

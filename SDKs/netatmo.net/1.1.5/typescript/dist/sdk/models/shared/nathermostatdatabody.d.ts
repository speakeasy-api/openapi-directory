import { SpeakeasyBase } from "../../../internal/utils";
import { NAPlug } from "./naplug";
import { NAUser } from "./nauser";
export declare class NAThermostatDataBody extends SpeakeasyBase {
    devices?: NAPlug[];
    user?: NAUser;
}

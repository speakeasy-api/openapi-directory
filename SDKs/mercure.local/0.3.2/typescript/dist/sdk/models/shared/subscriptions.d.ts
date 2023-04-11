import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * The list of active subscriptions
 */
export declare class Subscriptions extends SpeakeasyBase {
    atContext: string;
    id: string;
    lastEventID: string;
    subscriptions: Subscription[];
    type: string;
}

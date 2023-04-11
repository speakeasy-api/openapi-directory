import { SpeakeasyBase } from "../../../internal/utils";
import { Keys } from "./keys";
import { Links } from "./links";
import { Messages } from "./messages";
import { Voice } from "./voice";
/**
 * OK
 */
export declare class Application extends SpeakeasyBase {
    /**
     * A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
     */
    links?: Links;
    /**
     * The ID allocated to your application by Nexmo.
     */
    id?: string;
    /**
     * The Nexmo product that you access with this application.
     */
    keys?: Keys;
    /**
     * The Nexmo product that you access with this application.
     */
    messages: Messages;
    /**
     * The name of your application
     */
    name: string;
    /**
     * The Nexmo product that you access with this application.
     */
    voice: Voice;
}

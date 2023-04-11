import { SpeakeasyBase } from "../../../internal/utils";
import { KeysWithPrivateKey } from "./keyswithprivatekey";
import { Links } from "./links";
import { Messages } from "./messages";
import { Voice } from "./voice";
/**
 * Created
 */
export declare class ApplicationCreated extends SpeakeasyBase {
    /**
     * A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
     */
    links?: Links;
    /**
     * The ID allocated to your application by Nexmo.
     */
    id?: string;
    keys?: KeysWithPrivateKey;
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

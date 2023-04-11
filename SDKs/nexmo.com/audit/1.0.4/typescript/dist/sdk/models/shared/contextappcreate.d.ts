import { SpeakeasyBase } from "../../../internal/utils";
import { CallbackUrl } from "./callbackurl";
export declare class ContextAppCreateCreated extends SpeakeasyBase {
    /**
     * Which account the app is associated with
     */
    accountId?: string;
    answerUrl?: CallbackUrl;
    /**
     * UUID of the app that was created
     */
    appId?: string;
    eventUrl?: CallbackUrl;
    /**
     * The name of the application created
     */
    name?: string;
    /**
     * The type of application created
     */
    type?: string;
}
/**
 * A valid JSON object with information detailing the context of the audit event.
 */
export declare class ContextAppCreate extends SpeakeasyBase {
    /**
     * UUID of the app that was created
     */
    appId?: string;
    created?: ContextAppCreateCreated;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Entity events you want to be notified. If all is selected, there is no need to enter actions
 */
export declare enum HookEventTypeEnum {
    All = "all",
    Check = "check"
}
/**
 * indicates whether the hook is active or not. enabled by default
 */
export declare enum HookStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 * Represents a hook configuration
 */
export declare class Hook extends SpeakeasyBase {
    /**
     * Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three
     */
    actions?: string[];
    /**
     * Entity events you want to be notified. If all is selected, there is no need to enter actions
     */
    eventType?: HookEventTypeEnum;
    /**
     * Secret random hexadecimal key used to sign the event and confirm its legitimacy. Signing keys are used to decode the JWT you get as payload from events
     */
    signingKey?: string;
    /**
     * indicates whether the hook is active or not. enabled by default
     */
    status?: HookStatusEnum;
    /**
     * Platform with an endpoint ready to process the information. Only web is supported currently
     */
    subscriberType?: string;
    /**
     * Link where notification requests will be sent, required when subscriber_type is web
     */
    subscriberUrl?: string;
}

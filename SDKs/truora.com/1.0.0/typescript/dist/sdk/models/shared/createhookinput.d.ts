import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The entity events the client wants to subscribe
 */
export declare enum CreateHookInputEventTypeEnum {
    All = "all",
    Check = "check",
    ContinuousCheck = "continuous_check"
}
/**
 * indicates whether the hook is active or not. enabled by default
 */
export declare enum CreateHookInputStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 * Language for the notification to be sent
 */
export declare enum CreateHookInputSubscriberLanguageEnum {
    Af = "af",
    Ar = "ar",
    Ca = "ca",
    Cs = "cs",
    Da = "da",
    De = "de",
    El = "el",
    En = "en",
    Es = "es",
    Fi = "fi",
    Fr = "fr",
    He = "he",
    Hi = "hi",
    Hr = "hr",
    Hu = "hu",
    Id = "id",
    It = "it",
    Ja = "ja",
    Ko = "ko",
    Ms = "ms",
    Nb = "nb",
    Nl = "nl",
    Pl = "pl",
    Pt = "pt",
    PrBR = "pr-BR",
    Ro = "ro",
    Ru = "ru",
    Sv = "sv",
    Th = "th",
    Tl = "tl",
    Tr = "tr",
    Vi = "vi",
    Zh = "zh",
    ZhCN = "zh-CN",
    ZhHK = "zh-HK"
}
/**
 * A platform with an endpoint ready to process the information
 */
export declare enum CreateHookInputSubscriberTypeEnum {
    Web = "web",
    Email = "email"
}
/**
 * Creates a hook related to previous created check.
 */
export declare class CreateHookInput extends SpeakeasyBase {
    /**
     * Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three
     */
    actions?: string[];
    /**
     * The entity events the client wants to subscribe
     */
    eventType: CreateHookInputEventTypeEnum;
    /**
     * indicates whether the hook is active or not. enabled by default
     */
    status?: CreateHookInputStatusEnum;
    /**
     * Email address where the notification is to be sent. Required if subscriber_type was set to email
     */
    subscriberAddress?: string;
    /**
     * Language for the notification to be sent
     */
    subscriberLanguage?: CreateHookInputSubscriberLanguageEnum;
    /**
     * Name of the person to be notified
     */
    subscriberName?: string;
    /**
     * A platform with an endpoint ready to process the information
     */
    subscriberType: CreateHookInputSubscriberTypeEnum;
    /**
     * URL where the notification is to be sent. Required only if subscriber_type is set to web
     */
    subscriberUrl?: string;
}

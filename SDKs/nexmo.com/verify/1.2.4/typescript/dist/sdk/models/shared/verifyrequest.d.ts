import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The length of the verification code.
 */
export declare enum VerifyRequestCodeLengthEnum {
    Four = "4",
    Six = "6"
}
/**
 * By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>
 */
export declare enum VerifyRequestLgEnum {
    ArXa = "ar-xa",
    CsCz = "cs-cz",
    CyCy = "cy-cy",
    CyGb = "cy-gb",
    DaDk = "da-dk",
    DeDe = "de-de",
    ElGr = "el-gr",
    EnAu = "en-au",
    EnGb = "en-gb",
    EnIn = "en-in",
    EnUs = "en-us",
    EsEs = "es-es",
    EsMx = "es-mx",
    EsUs = "es-us",
    FiFi = "fi-fi",
    FilPh = "fil-ph",
    FrCa = "fr-ca",
    FrFr = "fr-fr",
    HiIn = "hi-in",
    HuHu = "hu-hu",
    IdId = "id-id",
    IsIs = "is-is",
    ItIt = "it-it",
    JaJp = "ja-jp",
    KoKr = "ko-kr",
    NbNo = "nb-no",
    NlNl = "nl-nl",
    PlPl = "pl-pl",
    PtBr = "pt-br",
    PtPt = "pt-pt",
    RoRo = "ro-ro",
    RuRu = "ru-ru",
    SvSe = "sv-se",
    ThTh = "th-th",
    TrTr = "tr-tr",
    ViVn = "vi-vn",
    YueCn = "yue-cn",
    ZhCn = "zh-cn",
    ZhTw = "zh-tw"
}
/**
 * Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).
 */
export declare enum VerifyRequestWorkflowIdEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
export declare class VerifyRequest extends SpeakeasyBase {
    /**
     * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
    /**
     * An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."
     */
    brand: string;
    /**
     * The length of the verification code.
     */
    codeLength?: VerifyRequestCodeLengthEnum;
    /**
     * If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.
     */
    country?: string;
    /**
     * By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>
     */
    lg?: VerifyRequestLgEnum;
    /**
     * Specifies the wait time in seconds between attempts to deliver the verification code.
     */
    nextEventWait?: number;
    /**
     * The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    number: string;
    /**
     * A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned.
     */
    pinCode?: string;
    /**
     * How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
     */
    pinExpiry?: number;
    /**
     * An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.
     */
    senderId?: string;
    /**
     * Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).
     */
    workflowId?: VerifyRequestWorkflowIdEnum;
}

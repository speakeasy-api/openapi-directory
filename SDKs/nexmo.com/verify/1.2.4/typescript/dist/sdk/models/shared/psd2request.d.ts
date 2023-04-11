import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The length of the verification code.
 */
export declare enum Psd2RequestCodeLengthEnum {
    Four = "4",
    Six = "6"
}
/**
 * By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.
 *
 * @remarks
 * *Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`
 */
export declare enum Psd2RequestLgEnum {
    EnGb = "en-gb",
    BgBg = "bg-bg",
    CsCz = "cs-cz",
    DaDk = "da-dk",
    DeDe = "de-de",
    EeEt = "ee-et",
    ElGr = "el-gr",
    EsEs = "es-es",
    FiFi = "fi-fi",
    FrFr = "fr-fr",
    GaIe = "ga-ie",
    HuHu = "hu-hu",
    ItIt = "it-it",
    LvLv = "lv-lv",
    LtLt = "lt-lt",
    MtMt = "mt-mt",
    NlNl = "nl-nl",
    PlPl = "pl-pl",
    SkSk = "sk-sk",
    SlSi = "sl-si",
    SvSe = "sv-se"
}
/**
 * Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).
 */
export declare enum Psd2RequestWorkflowIdEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
export declare class Psd2Request extends SpeakeasyBase {
    /**
     * The decimal amount of the payment to be confirmed, in Euros
     */
    amount: number;
    /**
     * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
    /**
     * The length of the verification code.
     */
    codeLength?: Psd2RequestCodeLengthEnum;
    /**
     * If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.
     */
    country?: string;
    /**
     * By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.
     *
     * @remarks
     * *Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`
     */
    lg?: Psd2RequestLgEnum;
    /**
     * Specifies the wait time in seconds between attempts to deliver the verification code.
     */
    nextEventWait?: number;
    /**
     * The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    number: string;
    /**
     * An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.
     */
    payee: string;
    /**
     * How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
     */
    pinExpiry?: number;
    /**
     * Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).
     */
    workflowId?: Psd2RequestWorkflowIdEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Language to translate message to
 */
export declare enum TranslateMessageRequestLanguageEnum {
    Af = "af",
    Sq = "sq",
    Am = "am",
    Ar = "ar",
    Az = "az",
    Bn = "bn",
    Bs = "bs",
    Bg = "bg",
    Zh = "zh",
    ZhTW = "zh-TW",
    Hr = "hr",
    Cs = "cs",
    Da = "da",
    FaAF = "fa-AF",
    Nl = "nl",
    En = "en",
    Et = "et",
    Fi = "fi",
    Fr = "fr",
    FrCA = "fr-CA",
    Ka = "ka",
    De = "de",
    El = "el",
    Ha = "ha",
    He = "he",
    Hi = "hi",
    Hu = "hu",
    Id = "id",
    It = "it",
    Ja = "ja",
    Ko = "ko",
    Lv = "lv",
    Ms = "ms",
    No = "no",
    Fa = "fa",
    Ps = "ps",
    Pl = "pl",
    Pt = "pt",
    Ro = "ro",
    Ru = "ru",
    Sr = "sr",
    Sk = "sk",
    Sl = "sl",
    So = "so",
    Es = "es",
    EsMX = "es-MX",
    Sw = "sw",
    Sv = "sv",
    Tl = "tl",
    Ta = "ta",
    Th = "th",
    Tr = "tr",
    Uk = "uk",
    Ur = "ur",
    Vi = "vi"
}
export declare class TranslateMessageRequest extends SpeakeasyBase {
    /**
     * Language to translate message to
     */
    language: TranslateMessageRequestLanguageEnum;
}

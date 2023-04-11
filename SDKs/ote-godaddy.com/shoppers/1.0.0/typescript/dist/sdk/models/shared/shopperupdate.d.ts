import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ShopperUpdateMarketIdEnum {
    DaDK = "da-DK",
    DeAT = "de-AT",
    DeCH = "de-CH",
    DEDE = "de-DE",
    ElGR = "el-GR",
    EnAE = "en-AE",
    EnAU = "en-AU",
    EnCA = "en-CA",
    EnGB = "en-GB",
    EnHK = "en-HK",
    EnIE = "en-IE",
    EnIL = "en-IL",
    EnIN = "en-IN",
    EnMY = "en-MY",
    EnNZ = "en-NZ",
    EnPH = "en-PH",
    EnPK = "en-PK",
    EnSG = "en-SG",
    EnUS = "en-US",
    EnZA = "en-ZA",
    EsAR = "es-AR",
    EsCL = "es-CL",
    EsCO = "es-CO",
    ESES = "es-ES",
    EsMX = "es-MX",
    EsPE = "es-PE",
    EsUS = "es-US",
    EsVE = "es-VE",
    FIFI = "fi-FI",
    FrBE = "fr-BE",
    FrCA = "fr-CA",
    FrCH = "fr-CH",
    FRFR = "fr-FR",
    HiIN = "hi-IN",
    IDID = "id-ID",
    ItCH = "it-CH",
    ITIT = "it-IT",
    JaJP = "ja-JP",
    KoKR = "ko-KR",
    MrIN = "mr-IN",
    NbNO = "nb-NO",
    NlBE = "nl-BE",
    NLNL = "nl-NL",
    PLPL = "pl-PL",
    PtBR = "pt-BR",
    PTPT = "pt-PT",
    RURU = "ru-RU",
    SvSE = "sv-SE",
    TaIN = "ta-IN",
    THTH = "th-TH",
    TRTR = "tr-TR",
    UkUA = "uk-UA",
    ViVN = "vi-VN",
    ZhHK = "zh-HK",
    ZhSG = "zh-SG",
    ZhTW = "zh-TW"
}
/**
 * The Shopper details to update
 */
export declare class ShopperUpdate extends SpeakeasyBase {
    email?: string;
    externalId?: number;
    marketId?: ShopperUpdateMarketIdEnum;
    nameFirst?: string;
    nameLast?: string;
}

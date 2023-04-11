import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ComptageRequestComptageEnum {
    One = "1"
}
/**
 * Fuseau horaire de la date d'envoi
 */
export declare enum ComptageRequestGmtZoneEnum {
    PacificMidway = "Pacific/Midway",
    AmericaAdak = "America/Adak",
    EtcGMTPlus10 = "Etc/GMT+10",
    PacificMarquesas = "Pacific/Marquesas",
    PacificGambier = "Pacific/Gambier",
    AmericaAnchorage = "America/Anchorage",
    AmericaEnsenada = "America/Ensenada",
    EtcGMTPlus8 = "Etc/GMT+8",
    AmericaLosAngeles = "America/Los_Angeles",
    AmericaDenver = "America/Denver",
    AmericaChihuahua = "America/Chihuahua",
    AmericaDawsonCreek = "America/Dawson_Creek",
    AmericaBelize = "America/Belize",
    AmericaCancun = "America/Cancun",
    ChileEasterIsland = "Chile/EasterIsland",
    AmericaChicago = "America/Chicago",
    AmericaNewYork = "America/New_York",
    AmericaHavana = "America/Havana",
    AmericaBogota = "America/Bogota",
    AmericaCaracas = "America/Caracas",
    AmericaSantiago = "America/Santiago",
    AmericaLaPaz = "America/La_Paz",
    AtlanticStanley = "Atlantic/Stanley",
    AmericaCampoGrande = "America/Campo_Grande",
    AmericaGooseBay = "America/Goose_Bay",
    AmericaGlaceBay = "America/Glace_Bay",
    AmericaStJohns = "America/St_Johns",
    AmericaAraguaina = "America/Araguaina",
    AmericaMontevideo = "America/Montevideo",
    AmericaMiquelon = "America/Miquelon",
    AmericaGodthab = "America/Godthab",
    AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires",
    AmericaSaoPaulo = "America/Sao_Paulo",
    AmericaNoronha = "America/Noronha",
    AtlanticCapeVerde = "Atlantic/Cape_Verde",
    AtlanticAzores = "Atlantic/Azores",
    EuropeBelfast = "Europe/Belfast",
    EuropeDublin = "Europe/Dublin",
    EuropeLisbon = "Europe/Lisbon",
    EuropeLondon = "Europe/London",
    AfricaAbidjan = "Africa/Abidjan",
    EuropeAmsterdam = "Europe/Amsterdam",
    EuropeBelgrade = "Europe/Belgrade",
    EuropeBrussels = "Europe/Brussels",
    AfricaAlgiers = "Africa/Algiers",
    AfricaWindhoek = "Africa/Windhoek",
    AsiaBeirut = "Asia/Beirut",
    AfricaCairo = "Africa/Cairo",
    AsiaGaza = "Asia/Gaza",
    AfricaBlantyre = "Africa/Blantyre",
    AsiaJerusalem = "Asia/Jerusalem",
    EuropeMinsk = "Europe/Minsk",
    AsiaDamascus = "Asia/Damascus",
    EuropeMoscow = "Europe/Moscow",
    AfricaAddisAbaba = "Africa/Addis_Ababa",
    AsiaTehran = "Asia/Tehran",
    AsiaDubai = "Asia/Dubai",
    AsiaYerevan = "Asia/Yerevan",
    AsiaKabul = "Asia/Kabul",
    AsiaYekaterinburg = "Asia/Yekaterinburg",
    AsiaTashkent = "Asia/Tashkent",
    AsiaKolkata = "Asia/Kolkata",
    AsiaKatmandu = "Asia/Katmandu",
    AsiaDhaka = "Asia/Dhaka",
    AsiaNovosibirsk = "Asia/Novosibirsk",
    AsiaRangoon = "Asia/Rangoon",
    AsiaBangkok = "Asia/Bangkok",
    AsiaKrasnoyarsk = "Asia/Krasnoyarsk",
    AsiaHongKong = "Asia/Hong_Kong",
    AsiaIrkutsk = "Asia/Irkutsk",
    AustraliaPerth = "Australia/Perth",
    AustraliaEucla = "Australia/Eucla",
    AsiaTokyo = "Asia/Tokyo",
    AsiaSeoul = "Asia/Seoul",
    AsiaYakutsk = "Asia/Yakutsk",
    AustraliaAdelaide = "Australia/Adelaide",
    AustraliaDarwin = "Australia/Darwin",
    AustraliaBrisbane = "Australia/Brisbane",
    AustraliaHobart = "Australia/Hobart",
    AsiaVladivostok = "Asia/Vladivostok",
    AustraliaLordHowe = "Australia/Lord_Howe",
    EtcGMT11 = "Etc/GMT-11",
    AsiaMagadan = "Asia/Magadan",
    PacificNorfolk = "Pacific/Norfolk",
    AsiaAnadyr = "Asia/Anadyr",
    PacificAuckland = "Pacific/Auckland",
    EtcGMT12 = "Etc/GMT-12",
    PacificChatham = "Pacific/Chatham",
    PacificTongatapu = "Pacific/Tongatapu",
    PacificKiritimati = "Pacific/Kiritimati"
}
export declare enum ComptageRequestNumAzurEnum {
    One = "1"
}
/**
 * Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
 *
 * @remarks
 * de plusieurs SMS.
 * Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918
 * caractères par message.
 * Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.
 * En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères
 * du « STOP SMS ».
 * Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"
 *
 */
export declare enum ComptageRequestSmslongEnum {
    NineHundredAndNinetyNine = "999"
}
/**
 * sms request
 */
export declare class ComptageRequest extends SpeakeasyBase {
    comptage: ComptageRequestComptageEnum;
    /**
     * Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.
     */
    dateEnvoi?: string;
    /**
     * - L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.
     *
     * @remarks
     *
     * - Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.
     *
     * - Il ne peut pas comporter uniquement des chiffres.
     *
     * - Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte "STOP XXXXX". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.
     *
     */
    emetteur?: string;
    /**
     * Fuseau horaire de la date d'envoi
     */
    gmtZone?: ComptageRequestGmtZoneEnum;
    /**
     * Clé API
     */
    keyid: string;
    /**
     * Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"
     */
    nostop?: string;
    /**
     * Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)
     */
    num: string;
    numAzur?: ComptageRequestNumAzurEnum;
    /**
     * Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.
     */
    sms: string;
    /**
     * Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué
     *
     * @remarks
     * de plusieurs SMS.
     * Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918
     * caractères par message.
     * Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères.
     * En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères
     * du « STOP SMS ».
     * Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"
     *
     */
    smslong?: ComptageRequestSmslongEnum;
    /**
     * Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception.
     */
    tracker?: string;
    /**
     * Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur
     *
     * @remarks
     * les numéros hors France métropolitaine.
     * Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"
     * Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu
     * des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.
     *
     */
    ucs2?: string;
}

"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComptageRequest = exports.ComptageRequestSmslongEnum = exports.ComptageRequestNumAzurEnum = exports.ComptageRequestGmtZoneEnum = exports.ComptageRequestComptageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var ComptageRequestComptageEnum;
(function (ComptageRequestComptageEnum) {
    ComptageRequestComptageEnum["One"] = "1";
})(ComptageRequestComptageEnum = exports.ComptageRequestComptageEnum || (exports.ComptageRequestComptageEnum = {}));
/**
 * Fuseau horaire de la date d'envoi
 */
var ComptageRequestGmtZoneEnum;
(function (ComptageRequestGmtZoneEnum) {
    ComptageRequestGmtZoneEnum["PacificMidway"] = "Pacific/Midway";
    ComptageRequestGmtZoneEnum["AmericaAdak"] = "America/Adak";
    ComptageRequestGmtZoneEnum["EtcGMTPlus10"] = "Etc/GMT+10";
    ComptageRequestGmtZoneEnum["PacificMarquesas"] = "Pacific/Marquesas";
    ComptageRequestGmtZoneEnum["PacificGambier"] = "Pacific/Gambier";
    ComptageRequestGmtZoneEnum["AmericaAnchorage"] = "America/Anchorage";
    ComptageRequestGmtZoneEnum["AmericaEnsenada"] = "America/Ensenada";
    ComptageRequestGmtZoneEnum["EtcGMTPlus8"] = "Etc/GMT+8";
    ComptageRequestGmtZoneEnum["AmericaLosAngeles"] = "America/Los_Angeles";
    ComptageRequestGmtZoneEnum["AmericaDenver"] = "America/Denver";
    ComptageRequestGmtZoneEnum["AmericaChihuahua"] = "America/Chihuahua";
    ComptageRequestGmtZoneEnum["AmericaDawsonCreek"] = "America/Dawson_Creek";
    ComptageRequestGmtZoneEnum["AmericaBelize"] = "America/Belize";
    ComptageRequestGmtZoneEnum["AmericaCancun"] = "America/Cancun";
    ComptageRequestGmtZoneEnum["ChileEasterIsland"] = "Chile/EasterIsland";
    ComptageRequestGmtZoneEnum["AmericaChicago"] = "America/Chicago";
    ComptageRequestGmtZoneEnum["AmericaNewYork"] = "America/New_York";
    ComptageRequestGmtZoneEnum["AmericaHavana"] = "America/Havana";
    ComptageRequestGmtZoneEnum["AmericaBogota"] = "America/Bogota";
    ComptageRequestGmtZoneEnum["AmericaCaracas"] = "America/Caracas";
    ComptageRequestGmtZoneEnum["AmericaSantiago"] = "America/Santiago";
    ComptageRequestGmtZoneEnum["AmericaLaPaz"] = "America/La_Paz";
    ComptageRequestGmtZoneEnum["AtlanticStanley"] = "Atlantic/Stanley";
    ComptageRequestGmtZoneEnum["AmericaCampoGrande"] = "America/Campo_Grande";
    ComptageRequestGmtZoneEnum["AmericaGooseBay"] = "America/Goose_Bay";
    ComptageRequestGmtZoneEnum["AmericaGlaceBay"] = "America/Glace_Bay";
    ComptageRequestGmtZoneEnum["AmericaStJohns"] = "America/St_Johns";
    ComptageRequestGmtZoneEnum["AmericaAraguaina"] = "America/Araguaina";
    ComptageRequestGmtZoneEnum["AmericaMontevideo"] = "America/Montevideo";
    ComptageRequestGmtZoneEnum["AmericaMiquelon"] = "America/Miquelon";
    ComptageRequestGmtZoneEnum["AmericaGodthab"] = "America/Godthab";
    ComptageRequestGmtZoneEnum["AmericaArgentinaBuenosAires"] = "America/Argentina/Buenos_Aires";
    ComptageRequestGmtZoneEnum["AmericaSaoPaulo"] = "America/Sao_Paulo";
    ComptageRequestGmtZoneEnum["AmericaNoronha"] = "America/Noronha";
    ComptageRequestGmtZoneEnum["AtlanticCapeVerde"] = "Atlantic/Cape_Verde";
    ComptageRequestGmtZoneEnum["AtlanticAzores"] = "Atlantic/Azores";
    ComptageRequestGmtZoneEnum["EuropeBelfast"] = "Europe/Belfast";
    ComptageRequestGmtZoneEnum["EuropeDublin"] = "Europe/Dublin";
    ComptageRequestGmtZoneEnum["EuropeLisbon"] = "Europe/Lisbon";
    ComptageRequestGmtZoneEnum["EuropeLondon"] = "Europe/London";
    ComptageRequestGmtZoneEnum["AfricaAbidjan"] = "Africa/Abidjan";
    ComptageRequestGmtZoneEnum["EuropeAmsterdam"] = "Europe/Amsterdam";
    ComptageRequestGmtZoneEnum["EuropeBelgrade"] = "Europe/Belgrade";
    ComptageRequestGmtZoneEnum["EuropeBrussels"] = "Europe/Brussels";
    ComptageRequestGmtZoneEnum["AfricaAlgiers"] = "Africa/Algiers";
    ComptageRequestGmtZoneEnum["AfricaWindhoek"] = "Africa/Windhoek";
    ComptageRequestGmtZoneEnum["AsiaBeirut"] = "Asia/Beirut";
    ComptageRequestGmtZoneEnum["AfricaCairo"] = "Africa/Cairo";
    ComptageRequestGmtZoneEnum["AsiaGaza"] = "Asia/Gaza";
    ComptageRequestGmtZoneEnum["AfricaBlantyre"] = "Africa/Blantyre";
    ComptageRequestGmtZoneEnum["AsiaJerusalem"] = "Asia/Jerusalem";
    ComptageRequestGmtZoneEnum["EuropeMinsk"] = "Europe/Minsk";
    ComptageRequestGmtZoneEnum["AsiaDamascus"] = "Asia/Damascus";
    ComptageRequestGmtZoneEnum["EuropeMoscow"] = "Europe/Moscow";
    ComptageRequestGmtZoneEnum["AfricaAddisAbaba"] = "Africa/Addis_Ababa";
    ComptageRequestGmtZoneEnum["AsiaTehran"] = "Asia/Tehran";
    ComptageRequestGmtZoneEnum["AsiaDubai"] = "Asia/Dubai";
    ComptageRequestGmtZoneEnum["AsiaYerevan"] = "Asia/Yerevan";
    ComptageRequestGmtZoneEnum["AsiaKabul"] = "Asia/Kabul";
    ComptageRequestGmtZoneEnum["AsiaYekaterinburg"] = "Asia/Yekaterinburg";
    ComptageRequestGmtZoneEnum["AsiaTashkent"] = "Asia/Tashkent";
    ComptageRequestGmtZoneEnum["AsiaKolkata"] = "Asia/Kolkata";
    ComptageRequestGmtZoneEnum["AsiaKatmandu"] = "Asia/Katmandu";
    ComptageRequestGmtZoneEnum["AsiaDhaka"] = "Asia/Dhaka";
    ComptageRequestGmtZoneEnum["AsiaNovosibirsk"] = "Asia/Novosibirsk";
    ComptageRequestGmtZoneEnum["AsiaRangoon"] = "Asia/Rangoon";
    ComptageRequestGmtZoneEnum["AsiaBangkok"] = "Asia/Bangkok";
    ComptageRequestGmtZoneEnum["AsiaKrasnoyarsk"] = "Asia/Krasnoyarsk";
    ComptageRequestGmtZoneEnum["AsiaHongKong"] = "Asia/Hong_Kong";
    ComptageRequestGmtZoneEnum["AsiaIrkutsk"] = "Asia/Irkutsk";
    ComptageRequestGmtZoneEnum["AustraliaPerth"] = "Australia/Perth";
    ComptageRequestGmtZoneEnum["AustraliaEucla"] = "Australia/Eucla";
    ComptageRequestGmtZoneEnum["AsiaTokyo"] = "Asia/Tokyo";
    ComptageRequestGmtZoneEnum["AsiaSeoul"] = "Asia/Seoul";
    ComptageRequestGmtZoneEnum["AsiaYakutsk"] = "Asia/Yakutsk";
    ComptageRequestGmtZoneEnum["AustraliaAdelaide"] = "Australia/Adelaide";
    ComptageRequestGmtZoneEnum["AustraliaDarwin"] = "Australia/Darwin";
    ComptageRequestGmtZoneEnum["AustraliaBrisbane"] = "Australia/Brisbane";
    ComptageRequestGmtZoneEnum["AustraliaHobart"] = "Australia/Hobart";
    ComptageRequestGmtZoneEnum["AsiaVladivostok"] = "Asia/Vladivostok";
    ComptageRequestGmtZoneEnum["AustraliaLordHowe"] = "Australia/Lord_Howe";
    ComptageRequestGmtZoneEnum["EtcGMT11"] = "Etc/GMT-11";
    ComptageRequestGmtZoneEnum["AsiaMagadan"] = "Asia/Magadan";
    ComptageRequestGmtZoneEnum["PacificNorfolk"] = "Pacific/Norfolk";
    ComptageRequestGmtZoneEnum["AsiaAnadyr"] = "Asia/Anadyr";
    ComptageRequestGmtZoneEnum["PacificAuckland"] = "Pacific/Auckland";
    ComptageRequestGmtZoneEnum["EtcGMT12"] = "Etc/GMT-12";
    ComptageRequestGmtZoneEnum["PacificChatham"] = "Pacific/Chatham";
    ComptageRequestGmtZoneEnum["PacificTongatapu"] = "Pacific/Tongatapu";
    ComptageRequestGmtZoneEnum["PacificKiritimati"] = "Pacific/Kiritimati";
})(ComptageRequestGmtZoneEnum = exports.ComptageRequestGmtZoneEnum || (exports.ComptageRequestGmtZoneEnum = {}));
var ComptageRequestNumAzurEnum;
(function (ComptageRequestNumAzurEnum) {
    ComptageRequestNumAzurEnum["One"] = "1";
})(ComptageRequestNumAzurEnum = exports.ComptageRequestNumAzurEnum || (exports.ComptageRequestNumAzurEnum = {}));
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
var ComptageRequestSmslongEnum;
(function (ComptageRequestSmslongEnum) {
    ComptageRequestSmslongEnum["NineHundredAndNinetyNine"] = "999";
})(ComptageRequestSmslongEnum = exports.ComptageRequestSmslongEnum || (exports.ComptageRequestSmslongEnum = {}));
/**
 * sms request
 */
var ComptageRequest = /** @class */ (function (_super) {
    __extends(ComptageRequest, _super);
    function ComptageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comptage" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "comptage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_envoi" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "dateEnvoi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "emetteur" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "emetteur", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "gmt_zone" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "gmtZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "keyid" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "keyid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nostop" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "nostop", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "num" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "num", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "numAzur" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "numAzur", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sms" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "sms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "smslong" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "smslong", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tracker" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "tracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ucs2" }),
        __metadata("design:type", String)
    ], ComptageRequest.prototype, "ucs2", void 0);
    return ComptageRequest;
}(utils_1.SpeakeasyBase));
exports.ComptageRequest = ComptageRequest;

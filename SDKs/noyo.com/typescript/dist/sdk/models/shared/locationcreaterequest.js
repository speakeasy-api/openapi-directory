"use strict";
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
exports.LocationCreateRequest = exports.LocationCreateRequestAddress = exports.LocationCreateRequestAddressStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LocationCreateRequestAddressStateEnum;
(function (LocationCreateRequestAddressStateEnum) {
    LocationCreateRequestAddressStateEnum["Ak"] = "AK";
    LocationCreateRequestAddressStateEnum["Al"] = "AL";
    LocationCreateRequestAddressStateEnum["Ar"] = "AR";
    LocationCreateRequestAddressStateEnum["As"] = "AS";
    LocationCreateRequestAddressStateEnum["Az"] = "AZ";
    LocationCreateRequestAddressStateEnum["Ca"] = "CA";
    LocationCreateRequestAddressStateEnum["Co"] = "CO";
    LocationCreateRequestAddressStateEnum["Ct"] = "CT";
    LocationCreateRequestAddressStateEnum["Dc"] = "DC";
    LocationCreateRequestAddressStateEnum["De"] = "DE";
    LocationCreateRequestAddressStateEnum["Fl"] = "FL";
    LocationCreateRequestAddressStateEnum["Fm"] = "FM";
    LocationCreateRequestAddressStateEnum["Ga"] = "GA";
    LocationCreateRequestAddressStateEnum["Gu"] = "GU";
    LocationCreateRequestAddressStateEnum["Hi"] = "HI";
    LocationCreateRequestAddressStateEnum["Ia"] = "IA";
    LocationCreateRequestAddressStateEnum["Id"] = "ID";
    LocationCreateRequestAddressStateEnum["Il"] = "IL";
    LocationCreateRequestAddressStateEnum["In"] = "IN";
    LocationCreateRequestAddressStateEnum["Ks"] = "KS";
    LocationCreateRequestAddressStateEnum["Ky"] = "KY";
    LocationCreateRequestAddressStateEnum["La"] = "LA";
    LocationCreateRequestAddressStateEnum["Ma"] = "MA";
    LocationCreateRequestAddressStateEnum["Md"] = "MD";
    LocationCreateRequestAddressStateEnum["Me"] = "ME";
    LocationCreateRequestAddressStateEnum["Mh"] = "MH";
    LocationCreateRequestAddressStateEnum["Mi"] = "MI";
    LocationCreateRequestAddressStateEnum["Mn"] = "MN";
    LocationCreateRequestAddressStateEnum["Mo"] = "MO";
    LocationCreateRequestAddressStateEnum["Mp"] = "MP";
    LocationCreateRequestAddressStateEnum["Ms"] = "MS";
    LocationCreateRequestAddressStateEnum["Mt"] = "MT";
    LocationCreateRequestAddressStateEnum["Nc"] = "NC";
    LocationCreateRequestAddressStateEnum["Nd"] = "ND";
    LocationCreateRequestAddressStateEnum["Ne"] = "NE";
    LocationCreateRequestAddressStateEnum["Nh"] = "NH";
    LocationCreateRequestAddressStateEnum["Nj"] = "NJ";
    LocationCreateRequestAddressStateEnum["Nm"] = "NM";
    LocationCreateRequestAddressStateEnum["Nv"] = "NV";
    LocationCreateRequestAddressStateEnum["Ny"] = "NY";
    LocationCreateRequestAddressStateEnum["Oh"] = "OH";
    LocationCreateRequestAddressStateEnum["Ok"] = "OK";
    LocationCreateRequestAddressStateEnum["Or"] = "OR";
    LocationCreateRequestAddressStateEnum["Pa"] = "PA";
    LocationCreateRequestAddressStateEnum["Pr"] = "PR";
    LocationCreateRequestAddressStateEnum["Pw"] = "PW";
    LocationCreateRequestAddressStateEnum["Ri"] = "RI";
    LocationCreateRequestAddressStateEnum["Sc"] = "SC";
    LocationCreateRequestAddressStateEnum["Sd"] = "SD";
    LocationCreateRequestAddressStateEnum["Tn"] = "TN";
    LocationCreateRequestAddressStateEnum["Tx"] = "TX";
    LocationCreateRequestAddressStateEnum["Um"] = "UM";
    LocationCreateRequestAddressStateEnum["Ut"] = "UT";
    LocationCreateRequestAddressStateEnum["Va"] = "VA";
    LocationCreateRequestAddressStateEnum["Vi"] = "VI";
    LocationCreateRequestAddressStateEnum["Vt"] = "VT";
    LocationCreateRequestAddressStateEnum["Wa"] = "WA";
    LocationCreateRequestAddressStateEnum["Wi"] = "WI";
    LocationCreateRequestAddressStateEnum["Wv"] = "WV";
    LocationCreateRequestAddressStateEnum["Wy"] = "WY";
})(LocationCreateRequestAddressStateEnum = exports.LocationCreateRequestAddressStateEnum || (exports.LocationCreateRequestAddressStateEnum = {}));
// LocationCreateRequestAddress
/**
 * Address of the group location
**/
var LocationCreateRequestAddress = /** @class */ (function (_super) {
    __extends(LocationCreateRequestAddress, _super);
    function LocationCreateRequestAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], LocationCreateRequestAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], LocationCreateRequestAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], LocationCreateRequestAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], LocationCreateRequestAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], LocationCreateRequestAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], LocationCreateRequestAddress.prototype, "zipCode", void 0);
    return LocationCreateRequestAddress;
}(utils_1.SpeakeasyBase));
exports.LocationCreateRequestAddress = LocationCreateRequestAddress;
var LocationCreateRequest = /** @class */ (function (_super) {
    __extends(LocationCreateRequest, _super);
    function LocationCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", LocationCreateRequestAddress)
    ], LocationCreateRequest.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_location" }),
        __metadata("design:type", Boolean)
    ], LocationCreateRequest.prototype, "billingLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], LocationCreateRequest.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_location" }),
        __metadata("design:type", Boolean)
    ], LocationCreateRequest.prototype, "primaryLocation", void 0);
    return LocationCreateRequest;
}(utils_1.SpeakeasyBase));
exports.LocationCreateRequest = LocationCreateRequest;

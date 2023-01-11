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
exports.LocationResult = exports.LocationResultAddress = exports.LocationResultAddressStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var LocationResultAddressStateEnum;
(function (LocationResultAddressStateEnum) {
    LocationResultAddressStateEnum["Ak"] = "AK";
    LocationResultAddressStateEnum["Al"] = "AL";
    LocationResultAddressStateEnum["Ar"] = "AR";
    LocationResultAddressStateEnum["As"] = "AS";
    LocationResultAddressStateEnum["Az"] = "AZ";
    LocationResultAddressStateEnum["Ca"] = "CA";
    LocationResultAddressStateEnum["Co"] = "CO";
    LocationResultAddressStateEnum["Ct"] = "CT";
    LocationResultAddressStateEnum["Dc"] = "DC";
    LocationResultAddressStateEnum["De"] = "DE";
    LocationResultAddressStateEnum["Fl"] = "FL";
    LocationResultAddressStateEnum["Fm"] = "FM";
    LocationResultAddressStateEnum["Ga"] = "GA";
    LocationResultAddressStateEnum["Gu"] = "GU";
    LocationResultAddressStateEnum["Hi"] = "HI";
    LocationResultAddressStateEnum["Ia"] = "IA";
    LocationResultAddressStateEnum["Id"] = "ID";
    LocationResultAddressStateEnum["Il"] = "IL";
    LocationResultAddressStateEnum["In"] = "IN";
    LocationResultAddressStateEnum["Ks"] = "KS";
    LocationResultAddressStateEnum["Ky"] = "KY";
    LocationResultAddressStateEnum["La"] = "LA";
    LocationResultAddressStateEnum["Ma"] = "MA";
    LocationResultAddressStateEnum["Md"] = "MD";
    LocationResultAddressStateEnum["Me"] = "ME";
    LocationResultAddressStateEnum["Mh"] = "MH";
    LocationResultAddressStateEnum["Mi"] = "MI";
    LocationResultAddressStateEnum["Mn"] = "MN";
    LocationResultAddressStateEnum["Mo"] = "MO";
    LocationResultAddressStateEnum["Mp"] = "MP";
    LocationResultAddressStateEnum["Ms"] = "MS";
    LocationResultAddressStateEnum["Mt"] = "MT";
    LocationResultAddressStateEnum["Nc"] = "NC";
    LocationResultAddressStateEnum["Nd"] = "ND";
    LocationResultAddressStateEnum["Ne"] = "NE";
    LocationResultAddressStateEnum["Nh"] = "NH";
    LocationResultAddressStateEnum["Nj"] = "NJ";
    LocationResultAddressStateEnum["Nm"] = "NM";
    LocationResultAddressStateEnum["Nv"] = "NV";
    LocationResultAddressStateEnum["Ny"] = "NY";
    LocationResultAddressStateEnum["Oh"] = "OH";
    LocationResultAddressStateEnum["Ok"] = "OK";
    LocationResultAddressStateEnum["Or"] = "OR";
    LocationResultAddressStateEnum["Pa"] = "PA";
    LocationResultAddressStateEnum["Pr"] = "PR";
    LocationResultAddressStateEnum["Pw"] = "PW";
    LocationResultAddressStateEnum["Ri"] = "RI";
    LocationResultAddressStateEnum["Sc"] = "SC";
    LocationResultAddressStateEnum["Sd"] = "SD";
    LocationResultAddressStateEnum["Tn"] = "TN";
    LocationResultAddressStateEnum["Tx"] = "TX";
    LocationResultAddressStateEnum["Um"] = "UM";
    LocationResultAddressStateEnum["Ut"] = "UT";
    LocationResultAddressStateEnum["Va"] = "VA";
    LocationResultAddressStateEnum["Vi"] = "VI";
    LocationResultAddressStateEnum["Vt"] = "VT";
    LocationResultAddressStateEnum["Wa"] = "WA";
    LocationResultAddressStateEnum["Wi"] = "WI";
    LocationResultAddressStateEnum["Wv"] = "WV";
    LocationResultAddressStateEnum["Wy"] = "WY";
})(LocationResultAddressStateEnum = exports.LocationResultAddressStateEnum || (exports.LocationResultAddressStateEnum = {}));
// LocationResultAddress
/**
 * Address of the group location
**/
var LocationResultAddress = /** @class */ (function (_super) {
    __extends(LocationResultAddress, _super);
    function LocationResultAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], LocationResultAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], LocationResultAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], LocationResultAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], LocationResultAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], LocationResultAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], LocationResultAddress.prototype, "zipCode", void 0);
    return LocationResultAddress;
}(utils_1.SpeakeasyBase));
exports.LocationResultAddress = LocationResultAddress;
var LocationResult = /** @class */ (function (_super) {
    __extends(LocationResult, _super);
    function LocationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", LocationResultAddress)
    ], LocationResult.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_location" }),
        __metadata("design:type", Boolean)
    ], LocationResult.prototype, "billingLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], LocationResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], LocationResult.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], LocationResult.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LocationResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], LocationResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary_location" }),
        __metadata("design:type", Boolean)
    ], LocationResult.prototype, "primaryLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], LocationResult.prototype, "version", void 0);
    return LocationResult;
}(utils_1.SpeakeasyBase));
exports.LocationResult = LocationResult;

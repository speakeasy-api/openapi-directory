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
exports.GetFleetFleetnameResponse = exports.GetFleetFleetnameRequest = exports.GetFleetFleetname200ApplicationJson = exports.GetFleetFleetnamePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetFleetFleetnamePathParams = /** @class */ (function (_super) {
    __extends(GetFleetFleetnamePathParams, _super);
    function GetFleetFleetnamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fleetname" }),
        __metadata("design:type", String)
    ], GetFleetFleetnamePathParams.prototype, "fleetname", void 0);
    return GetFleetFleetnamePathParams;
}(utils_1.SpeakeasyBase));
exports.GetFleetFleetnamePathParams = GetFleetFleetnamePathParams;
var GetFleetFleetname200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFleetFleetname200ApplicationJson, _super);
    function GetFleetFleetname200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], GetFleetFleetname200ApplicationJson.prototype, "atId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], GetFleetFleetname200ApplicationJson.prototype, "logo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logo_email" }),
        __metadata("design:type", String)
    ], GetFleetFleetname200ApplicationJson.prototype, "logoEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members" }),
        __metadata("design:type", Array)
    ], GetFleetFleetname200ApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetFleetFleetname200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], GetFleetFleetname200ApplicationJson.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], GetFleetFleetname200ApplicationJson.prototype, "sub", void 0);
    return GetFleetFleetname200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetFleetFleetname200ApplicationJson = GetFleetFleetname200ApplicationJson;
var GetFleetFleetnameRequest = /** @class */ (function (_super) {
    __extends(GetFleetFleetnameRequest, _super);
    function GetFleetFleetnameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFleetFleetnamePathParams)
    ], GetFleetFleetnameRequest.prototype, "pathParams", void 0);
    return GetFleetFleetnameRequest;
}(utils_1.SpeakeasyBase));
exports.GetFleetFleetnameRequest = GetFleetFleetnameRequest;
var GetFleetFleetnameResponse = /** @class */ (function (_super) {
    __extends(GetFleetFleetnameResponse, _super);
    function GetFleetFleetnameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFleetFleetnameResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFleetFleetnameResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFleetFleetname200ApplicationJson)
    ], GetFleetFleetnameResponse.prototype, "getFleetFleetname200ApplicationJSONObject", void 0);
    return GetFleetFleetnameResponse;
}(utils_1.SpeakeasyBase));
exports.GetFleetFleetnameResponse = GetFleetFleetnameResponse;

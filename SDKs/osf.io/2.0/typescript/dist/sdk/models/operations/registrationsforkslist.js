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
exports.RegistrationsForksListResponse = exports.RegistrationsForksListRequest = exports.RegistrationsForksListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RegistrationsForksListPathParams = /** @class */ (function (_super) {
    __extends(RegistrationsForksListPathParams, _super);
    function RegistrationsForksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registration_id" }),
        __metadata("design:type", String)
    ], RegistrationsForksListPathParams.prototype, "registrationId", void 0);
    return RegistrationsForksListPathParams;
}(utils_1.SpeakeasyBase));
exports.RegistrationsForksListPathParams = RegistrationsForksListPathParams;
var RegistrationsForksListRequest = /** @class */ (function (_super) {
    __extends(RegistrationsForksListRequest, _super);
    function RegistrationsForksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegistrationsForksListPathParams)
    ], RegistrationsForksListRequest.prototype, "pathParams", void 0);
    return RegistrationsForksListRequest;
}(utils_1.SpeakeasyBase));
exports.RegistrationsForksListRequest = RegistrationsForksListRequest;
var RegistrationsForksListResponse = /** @class */ (function (_super) {
    __extends(RegistrationsForksListResponse, _super);
    function RegistrationsForksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RegistrationsForksListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegistrationsForksListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegistrationsForksListResponse.prototype, "statusCode", void 0);
    return RegistrationsForksListResponse;
}(utils_1.SpeakeasyBase));
exports.RegistrationsForksListResponse = RegistrationsForksListResponse;

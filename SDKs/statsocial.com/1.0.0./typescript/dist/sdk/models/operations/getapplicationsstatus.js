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
exports.GetApplicationsStatusResponse = exports.GetApplicationsStatusRequest = exports.GetApplicationsStatusQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetApplicationsStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetApplicationsStatusQueryParams, _super);
    function GetApplicationsStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetApplicationsStatusQueryParams.prototype, "key", void 0);
    return GetApplicationsStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetApplicationsStatusQueryParams = GetApplicationsStatusQueryParams;
var GetApplicationsStatusRequest = /** @class */ (function (_super) {
    __extends(GetApplicationsStatusRequest, _super);
    function GetApplicationsStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApplicationsStatusQueryParams)
    ], GetApplicationsStatusRequest.prototype, "queryParams", void 0);
    return GetApplicationsStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetApplicationsStatusRequest = GetApplicationsStatusRequest;
var GetApplicationsStatusResponse = /** @class */ (function (_super) {
    __extends(GetApplicationsStatusResponse, _super);
    function GetApplicationsStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetApplicationsStatusResponse.prototype, "fourHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetApplicationsStatusResponse.prototype, "fourHundredAndOneError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetApplicationsStatusResponse.prototype, "fourHundredAndThreeError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetApplicationsStatusResponse.prototype, "fiveHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetApplicationsStatusResponse.prototype, "applicationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetApplicationsStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetApplicationsStatusResponse.prototype, "statusCode", void 0);
    return GetApplicationsStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetApplicationsStatusResponse = GetApplicationsStatusResponse;

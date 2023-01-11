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
exports.SessionControllerGetSessionInfoResponse = exports.SessionControllerGetSessionInfoRequest = exports.SessionControllerGetSessionInfoQueryParams = exports.SessionControllerGetSessionInfoPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var SessionControllerGetSessionInfoPathParams = /** @class */ (function (_super) {
    __extends(SessionControllerGetSessionInfoPathParams, _super);
    function SessionControllerGetSessionInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], SessionControllerGetSessionInfoPathParams.prototype, "shortName", void 0);
    return SessionControllerGetSessionInfoPathParams;
}(utils_1.SpeakeasyBase));
exports.SessionControllerGetSessionInfoPathParams = SessionControllerGetSessionInfoPathParams;
var SessionControllerGetSessionInfoQueryParams = /** @class */ (function (_super) {
    __extends(SessionControllerGetSessionInfoQueryParams, _super);
    function SessionControllerGetSessionInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], SessionControllerGetSessionInfoQueryParams.prototype, "token", void 0);
    return SessionControllerGetSessionInfoQueryParams;
}(utils_1.SpeakeasyBase));
exports.SessionControllerGetSessionInfoQueryParams = SessionControllerGetSessionInfoQueryParams;
var SessionControllerGetSessionInfoRequest = /** @class */ (function (_super) {
    __extends(SessionControllerGetSessionInfoRequest, _super);
    function SessionControllerGetSessionInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SessionControllerGetSessionInfoPathParams)
    ], SessionControllerGetSessionInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SessionControllerGetSessionInfoQueryParams)
    ], SessionControllerGetSessionInfoRequest.prototype, "queryParams", void 0);
    return SessionControllerGetSessionInfoRequest;
}(utils_1.SpeakeasyBase));
exports.SessionControllerGetSessionInfoRequest = SessionControllerGetSessionInfoRequest;
var SessionControllerGetSessionInfoResponse = /** @class */ (function (_super) {
    __extends(SessionControllerGetSessionInfoResponse, _super);
    function SessionControllerGetSessionInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SessionControllerGetSessionInfoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SessionControllerGetSessionInfoResponse.prototype, "sessionControllerGetSessionInfo200ApplicationJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SessionControllerGetSessionInfoResponse.prototype, "sessionControllerGetSessionInfo200ApplicationXMLString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SessionControllerGetSessionInfoResponse.prototype, "sessionControllerGetSessionInfo200TextJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SessionControllerGetSessionInfoResponse.prototype, "sessionControllerGetSessionInfo200TextXMLString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SessionControllerGetSessionInfoResponse.prototype, "statusCode", void 0);
    return SessionControllerGetSessionInfoResponse;
}(utils_1.SpeakeasyBase));
exports.SessionControllerGetSessionInfoResponse = SessionControllerGetSessionInfoResponse;

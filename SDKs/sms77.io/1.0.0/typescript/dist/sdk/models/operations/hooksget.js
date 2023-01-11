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
exports.HooksGetResponse = exports.HooksGetRequest = exports.HooksGet200ApplicationJson = exports.HooksGet200ApplicationJsonHooks = exports.HooksGetQueryParams = exports.HooksGetActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var HooksGetActionEnum;
(function (HooksGetActionEnum) {
    HooksGetActionEnum["Read"] = "read";
})(HooksGetActionEnum = exports.HooksGetActionEnum || (exports.HooksGetActionEnum = {}));
var HooksGetQueryParams = /** @class */ (function (_super) {
    __extends(HooksGetQueryParams, _super);
    function HooksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], HooksGetQueryParams.prototype, "action", void 0);
    return HooksGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.HooksGetQueryParams = HooksGetQueryParams;
var HooksGet200ApplicationJsonHooks = /** @class */ (function (_super) {
    __extends(HooksGet200ApplicationJsonHooks, _super);
    function HooksGet200ApplicationJsonHooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], HooksGet200ApplicationJsonHooks.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_type" }),
        __metadata("design:type", String)
    ], HooksGet200ApplicationJsonHooks.prototype, "eventType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HooksGet200ApplicationJsonHooks.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_method" }),
        __metadata("design:type", String)
    ], HooksGet200ApplicationJsonHooks.prototype, "requestMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_url" }),
        __metadata("design:type", String)
    ], HooksGet200ApplicationJsonHooks.prototype, "targetUrl", void 0);
    return HooksGet200ApplicationJsonHooks;
}(utils_1.SpeakeasyBase));
exports.HooksGet200ApplicationJsonHooks = HooksGet200ApplicationJsonHooks;
var HooksGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(HooksGet200ApplicationJson, _super);
    function HooksGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hooks", elemType: HooksGet200ApplicationJsonHooks }),
        __metadata("design:type", Array)
    ], HooksGet200ApplicationJson.prototype, "hooks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], HooksGet200ApplicationJson.prototype, "success", void 0);
    return HooksGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.HooksGet200ApplicationJson = HooksGet200ApplicationJson;
var HooksGetRequest = /** @class */ (function (_super) {
    __extends(HooksGetRequest, _super);
    function HooksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HooksGetQueryParams)
    ], HooksGetRequest.prototype, "queryParams", void 0);
    return HooksGetRequest;
}(utils_1.SpeakeasyBase));
exports.HooksGetRequest = HooksGetRequest;
var HooksGetResponse = /** @class */ (function (_super) {
    __extends(HooksGetResponse, _super);
    function HooksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], HooksGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HooksGet200ApplicationJson)
    ], HooksGetResponse.prototype, "hooksGet200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], HooksGetResponse.prototype, "statusCode", void 0);
    return HooksGetResponse;
}(utils_1.SpeakeasyBase));
exports.HooksGetResponse = HooksGetResponse;

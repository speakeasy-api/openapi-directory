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
exports.ModifySettingResponse = exports.ModifySettingRequest = exports.ModifySetting200ApplicationJson = exports.ModifySetting200ApplicationJsonResultEnum = exports.ModifySetting200ApplicationJsonData = exports.ModifySetting200ApplicationJsonActionEnum = exports.ModifySettingRequestBody = exports.ModifySettingPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ModifySettingPathParams = /** @class */ (function (_super) {
    __extends(ModifySettingPathParams, _super);
    function ModifySettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", String)
    ], ModifySettingPathParams.prototype, "settingId", void 0);
    return ModifySettingPathParams;
}(utils_1.SpeakeasyBase));
exports.ModifySettingPathParams = ModifySettingPathParams;
var ModifySettingRequestBody = /** @class */ (function (_super) {
    __extends(ModifySettingRequestBody, _super);
    function ModifySettingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ModifySettingRequestBody.prototype, "value", void 0);
    return ModifySettingRequestBody;
}(utils_1.SpeakeasyBase));
exports.ModifySettingRequestBody = ModifySettingRequestBody;
var ModifySetting200ApplicationJsonActionEnum;
(function (ModifySetting200ApplicationJsonActionEnum) {
    ModifySetting200ApplicationJsonActionEnum["ModifySetting"] = "modifySetting";
})(ModifySetting200ApplicationJsonActionEnum = exports.ModifySetting200ApplicationJsonActionEnum || (exports.ModifySetting200ApplicationJsonActionEnum = {}));
// ModifySetting200ApplicationJsonData
/**
 * Information about the setting
**/
var ModifySetting200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ModifySetting200ApplicationJsonData, _super);
    function ModifySetting200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settingId" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJsonData.prototype, "settingId", void 0);
    return ModifySetting200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ModifySetting200ApplicationJsonData = ModifySetting200ApplicationJsonData;
var ModifySetting200ApplicationJsonResultEnum;
(function (ModifySetting200ApplicationJsonResultEnum) {
    ModifySetting200ApplicationJsonResultEnum["Success"] = "success";
    ModifySetting200ApplicationJsonResultEnum["Error"] = "error";
})(ModifySetting200ApplicationJsonResultEnum = exports.ModifySetting200ApplicationJsonResultEnum || (exports.ModifySetting200ApplicationJsonResultEnum = {}));
var ModifySetting200ApplicationJson = /** @class */ (function (_super) {
    __extends(ModifySetting200ApplicationJson, _super);
    function ModifySetting200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ModifySetting200ApplicationJsonData)
    ], ModifySetting200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJson.prototype, "result", void 0);
    return ModifySetting200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ModifySetting200ApplicationJson = ModifySetting200ApplicationJson;
var ModifySettingRequest = /** @class */ (function (_super) {
    __extends(ModifySettingRequest, _super);
    function ModifySettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifySettingPathParams)
    ], ModifySettingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ModifySettingRequestBody)
    ], ModifySettingRequest.prototype, "request", void 0);
    return ModifySettingRequest;
}(utils_1.SpeakeasyBase));
exports.ModifySettingRequest = ModifySettingRequest;
var ModifySettingResponse = /** @class */ (function (_super) {
    __extends(ModifySettingResponse, _super);
    function ModifySettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ModifySettingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ModifySettingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifySetting200ApplicationJson)
    ], ModifySettingResponse.prototype, "modifySetting200ApplicationJSONObject", void 0);
    return ModifySettingResponse;
}(utils_1.SpeakeasyBase));
exports.ModifySettingResponse = ModifySettingResponse;

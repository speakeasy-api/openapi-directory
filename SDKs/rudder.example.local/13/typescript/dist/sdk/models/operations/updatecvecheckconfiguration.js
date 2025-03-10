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
exports.UpdateCveCheckConfigurationResponse = exports.UpdateCveCheckConfigurationRequest = exports.UpdateCveCheckConfiguration200ApplicationJson = exports.UpdateCveCheckConfiguration200ApplicationJsonResultEnum = exports.UpdateCveCheckConfiguration200ApplicationJsonData = exports.UpdateCveCheckConfiguration200ApplicationJsonActionEnum = exports.UpdateCveCheckConfigurationRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
// UpdateCveCheckConfigurationRequestBody
/**
 * CVE check config
**/
var UpdateCveCheckConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCveCheckConfigurationRequestBody, _super);
    function UpdateCveCheckConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], UpdateCveCheckConfigurationRequestBody.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UpdateCveCheckConfigurationRequestBody.prototype, "url", void 0);
    return UpdateCveCheckConfigurationRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateCveCheckConfigurationRequestBody = UpdateCveCheckConfigurationRequestBody;
var UpdateCveCheckConfiguration200ApplicationJsonActionEnum;
(function (UpdateCveCheckConfiguration200ApplicationJsonActionEnum) {
    UpdateCveCheckConfiguration200ApplicationJsonActionEnum["UpdateCveCheckConfiguration"] = "updateCVECheckConfiguration";
})(UpdateCveCheckConfiguration200ApplicationJsonActionEnum = exports.UpdateCveCheckConfiguration200ApplicationJsonActionEnum || (exports.UpdateCveCheckConfiguration200ApplicationJsonActionEnum = {}));
var UpdateCveCheckConfiguration200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateCveCheckConfiguration200ApplicationJsonData, _super);
    function UpdateCveCheckConfiguration200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], UpdateCveCheckConfiguration200ApplicationJsonData.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UpdateCveCheckConfiguration200ApplicationJsonData.prototype, "url", void 0);
    return UpdateCveCheckConfiguration200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.UpdateCveCheckConfiguration200ApplicationJsonData = UpdateCveCheckConfiguration200ApplicationJsonData;
var UpdateCveCheckConfiguration200ApplicationJsonResultEnum;
(function (UpdateCveCheckConfiguration200ApplicationJsonResultEnum) {
    UpdateCveCheckConfiguration200ApplicationJsonResultEnum["Success"] = "success";
    UpdateCveCheckConfiguration200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateCveCheckConfiguration200ApplicationJsonResultEnum = exports.UpdateCveCheckConfiguration200ApplicationJsonResultEnum || (exports.UpdateCveCheckConfiguration200ApplicationJsonResultEnum = {}));
var UpdateCveCheckConfiguration200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCveCheckConfiguration200ApplicationJson, _super);
    function UpdateCveCheckConfiguration200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateCveCheckConfiguration200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", UpdateCveCheckConfiguration200ApplicationJsonData)
    ], UpdateCveCheckConfiguration200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateCveCheckConfiguration200ApplicationJson.prototype, "result", void 0);
    return UpdateCveCheckConfiguration200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateCveCheckConfiguration200ApplicationJson = UpdateCveCheckConfiguration200ApplicationJson;
var UpdateCveCheckConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateCveCheckConfigurationRequest, _super);
    function UpdateCveCheckConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCveCheckConfigurationRequestBody)
    ], UpdateCveCheckConfigurationRequest.prototype, "request", void 0);
    return UpdateCveCheckConfigurationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateCveCheckConfigurationRequest = UpdateCveCheckConfigurationRequest;
var UpdateCveCheckConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateCveCheckConfigurationResponse, _super);
    function UpdateCveCheckConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCveCheckConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateCveCheckConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCveCheckConfiguration200ApplicationJson)
    ], UpdateCveCheckConfigurationResponse.prototype, "updateCVECheckConfiguration200ApplicationJSONObject", void 0);
    return UpdateCveCheckConfigurationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateCveCheckConfigurationResponse = UpdateCveCheckConfigurationResponse;

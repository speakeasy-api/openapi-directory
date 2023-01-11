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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchUsersIdResponse = exports.PatchUsersIdRequest = exports.PatchUsersId404ApplicationJson = exports.PatchUsersId403ApplicationJson = exports.PatchUsersId401ApplicationJson = exports.PatchUsersId400ApplicationJson = exports.PatchUsersIdRequestBodyInput = exports.PatchUsersIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchUsersIdPathParams = /** @class */ (function (_super) {
    __extends(PatchUsersIdPathParams, _super);
    function PatchUsersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchUsersIdPathParams.prototype, "id", void 0);
    return PatchUsersIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchUsersIdPathParams = PatchUsersIdPathParams;
var PatchUsersIdRequestBodyInput = /** @class */ (function (_super) {
    __extends(PatchUsersIdRequestBodyInput, _super);
    function PatchUsersIdRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBodyInput.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBodyInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBodyInput.prototype, "title", void 0);
    return PatchUsersIdRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.PatchUsersIdRequestBodyInput = PatchUsersIdRequestBodyInput;
var PatchUsersId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchUsersId400ApplicationJson, _super);
    function PatchUsersId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PatchUsersId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PatchUsersId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PatchUsersId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchUsersId400ApplicationJson = PatchUsersId400ApplicationJson;
var PatchUsersId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchUsersId401ApplicationJson, _super);
    function PatchUsersId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchUsersId401ApplicationJson.prototype, "detail", void 0);
    return PatchUsersId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchUsersId401ApplicationJson = PatchUsersId401ApplicationJson;
var PatchUsersId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchUsersId403ApplicationJson, _super);
    function PatchUsersId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchUsersId403ApplicationJson.prototype, "detail", void 0);
    return PatchUsersId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchUsersId403ApplicationJson = PatchUsersId403ApplicationJson;
var PatchUsersId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchUsersId404ApplicationJson, _super);
    function PatchUsersId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchUsersId404ApplicationJson.prototype, "detail", void 0);
    return PatchUsersId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchUsersId404ApplicationJson = PatchUsersId404ApplicationJson;
var PatchUsersIdRequest = /** @class */ (function (_super) {
    __extends(PatchUsersIdRequest, _super);
    function PatchUsersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUsersIdPathParams)
    ], PatchUsersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchUsersIdRequestBodyInput)
    ], PatchUsersIdRequest.prototype, "request", void 0);
    return PatchUsersIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchUsersIdRequest = PatchUsersIdRequest;
var PatchUsersIdResponse = /** @class */ (function (_super) {
    __extends(PatchUsersIdResponse, _super);
    function PatchUsersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchUsersIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchUsersIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.User)
    ], PatchUsersIdResponse.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUsersId400ApplicationJson)
    ], PatchUsersIdResponse.prototype, "patchUsersId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUsersId401ApplicationJson)
    ], PatchUsersIdResponse.prototype, "patchUsersId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUsersId403ApplicationJson)
    ], PatchUsersIdResponse.prototype, "patchUsersId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchUsersId404ApplicationJson)
    ], PatchUsersIdResponse.prototype, "patchUsersId404ApplicationJSONObject", void 0);
    return PatchUsersIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchUsersIdResponse = PatchUsersIdResponse;

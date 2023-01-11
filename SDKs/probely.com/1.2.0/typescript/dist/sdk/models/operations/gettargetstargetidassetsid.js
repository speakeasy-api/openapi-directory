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
exports.GetTargetsTargetIdAssetsIdResponse = exports.GetTargetsTargetIdAssetsIdRequest = exports.GetTargetsTargetIdAssetsId404ApplicationJson = exports.GetTargetsTargetIdAssetsId401ApplicationJson = exports.GetTargetsTargetIdAssetsId400ApplicationJson = exports.GetTargetsTargetIdAssetsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdAssetsIdPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsIdPathParams, _super);
    function GetTargetsTargetIdAssetsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsIdPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdAssetsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsIdPathParams = GetTargetsTargetIdAssetsIdPathParams;
var GetTargetsTargetIdAssetsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsId400ApplicationJson, _super);
    function GetTargetsTargetIdAssetsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdAssetsId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdAssetsId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return GetTargetsTargetIdAssetsId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsId400ApplicationJson = GetTargetsTargetIdAssetsId400ApplicationJson;
var GetTargetsTargetIdAssetsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsId401ApplicationJson, _super);
    function GetTargetsTargetIdAssetsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsId401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdAssetsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsId401ApplicationJson = GetTargetsTargetIdAssetsId401ApplicationJson;
var GetTargetsTargetIdAssetsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsId404ApplicationJson, _super);
    function GetTargetsTargetIdAssetsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsId404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdAssetsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsId404ApplicationJson = GetTargetsTargetIdAssetsId404ApplicationJson;
var GetTargetsTargetIdAssetsIdRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsIdRequest, _super);
    function GetTargetsTargetIdAssetsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssetsIdPathParams)
    ], GetTargetsTargetIdAssetsIdRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdAssetsIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsIdRequest = GetTargetsTargetIdAssetsIdRequest;
var GetTargetsTargetIdAssetsIdResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdAssetsIdResponse, _super);
    function GetTargetsTargetIdAssetsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Asset)
    ], GetTargetsTargetIdAssetsIdResponse.prototype, "asset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdAssetsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdAssetsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssetsId400ApplicationJson)
    ], GetTargetsTargetIdAssetsIdResponse.prototype, "getTargetsTargetIdAssetsId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssetsId401ApplicationJson)
    ], GetTargetsTargetIdAssetsIdResponse.prototype, "getTargetsTargetIdAssetsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdAssetsId404ApplicationJson)
    ], GetTargetsTargetIdAssetsIdResponse.prototype, "getTargetsTargetIdAssetsId404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdAssetsIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdAssetsIdResponse = GetTargetsTargetIdAssetsIdResponse;

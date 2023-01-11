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
exports.PatchTargetsIdResponse = exports.PatchTargetsIdRequest = exports.PatchTargetsId404ApplicationJson = exports.PatchTargetsId403ApplicationJson = exports.PatchTargetsId401ApplicationJson = exports.PatchTargetsId400ApplicationJson = exports.PatchTargetsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchTargetsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchTargetsIdPathParams, _super);
    function PatchTargetsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchTargetsIdPathParams.prototype, "id", void 0);
    return PatchTargetsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsIdPathParams = PatchTargetsIdPathParams;
var PatchTargetsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsId400ApplicationJson, _super);
    function PatchTargetsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PatchTargetsId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PatchTargetsId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PatchTargetsId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsId400ApplicationJson = PatchTargetsId400ApplicationJson;
var PatchTargetsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsId401ApplicationJson, _super);
    function PatchTargetsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsId401ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsId401ApplicationJson = PatchTargetsId401ApplicationJson;
var PatchTargetsId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsId403ApplicationJson, _super);
    function PatchTargetsId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsId403ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsId403ApplicationJson = PatchTargetsId403ApplicationJson;
var PatchTargetsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsId404ApplicationJson, _super);
    function PatchTargetsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsId404ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsId404ApplicationJson = PatchTargetsId404ApplicationJson;
var PatchTargetsIdRequest = /** @class */ (function (_super) {
    __extends(PatchTargetsIdRequest, _super);
    function PatchTargetsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsIdPathParams)
    ], PatchTargetsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetInput)
    ], PatchTargetsIdRequest.prototype, "request", void 0);
    return PatchTargetsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsIdRequest = PatchTargetsIdRequest;
var PatchTargetsIdResponse = /** @class */ (function (_super) {
    __extends(PatchTargetsIdResponse, _super);
    function PatchTargetsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchTargetsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchTargetsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Target)
    ], PatchTargetsIdResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsId400ApplicationJson)
    ], PatchTargetsIdResponse.prototype, "patchTargetsId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsId401ApplicationJson)
    ], PatchTargetsIdResponse.prototype, "patchTargetsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsId403ApplicationJson)
    ], PatchTargetsIdResponse.prototype, "patchTargetsId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsId404ApplicationJson)
    ], PatchTargetsIdResponse.prototype, "patchTargetsId404ApplicationJSONObject", void 0);
    return PatchTargetsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsIdResponse = PatchTargetsIdResponse;

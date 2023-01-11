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
exports.PatchTargetsTargetIdScheduledscansIdResponse = exports.PatchTargetsTargetIdScheduledscansIdRequest = exports.PatchTargetsTargetIdScheduledscansId404ApplicationJson = exports.PatchTargetsTargetIdScheduledscansId403ApplicationJson = exports.PatchTargetsTargetIdScheduledscansId401ApplicationJson = exports.PatchTargetsTargetIdScheduledscansId400ApplicationJson = exports.PatchTargetsTargetIdScheduledscansIdRequestBody = exports.PatchTargetsTargetIdScheduledscansIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchTargetsTargetIdScheduledscansIdPathParams = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansIdPathParams, _super);
    function PatchTargetsTargetIdScheduledscansIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdScheduledscansIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdScheduledscansIdPathParams.prototype, "targetId", void 0);
    return PatchTargetsTargetIdScheduledscansIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansIdPathParams = PatchTargetsTargetIdScheduledscansIdPathParams;
var PatchTargetsTargetIdScheduledscansIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansIdRequestBody, _super);
    function PatchTargetsTargetIdScheduledscansIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], PatchTargetsTargetIdScheduledscansIdRequestBody.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdScheduledscansIdRequestBody.prototype, "recurrence", void 0);
    return PatchTargetsTargetIdScheduledscansIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansIdRequestBody = PatchTargetsTargetIdScheduledscansIdRequestBody;
var PatchTargetsTargetIdScheduledscansId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansId400ApplicationJson, _super);
    function PatchTargetsTargetIdScheduledscansId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PatchTargetsTargetIdScheduledscansId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PatchTargetsTargetIdScheduledscansId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PatchTargetsTargetIdScheduledscansId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansId400ApplicationJson = PatchTargetsTargetIdScheduledscansId400ApplicationJson;
var PatchTargetsTargetIdScheduledscansId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansId401ApplicationJson, _super);
    function PatchTargetsTargetIdScheduledscansId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdScheduledscansId401ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdScheduledscansId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansId401ApplicationJson = PatchTargetsTargetIdScheduledscansId401ApplicationJson;
var PatchTargetsTargetIdScheduledscansId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansId403ApplicationJson, _super);
    function PatchTargetsTargetIdScheduledscansId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdScheduledscansId403ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdScheduledscansId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansId403ApplicationJson = PatchTargetsTargetIdScheduledscansId403ApplicationJson;
var PatchTargetsTargetIdScheduledscansId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansId404ApplicationJson, _super);
    function PatchTargetsTargetIdScheduledscansId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdScheduledscansId404ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdScheduledscansId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansId404ApplicationJson = PatchTargetsTargetIdScheduledscansId404ApplicationJson;
var PatchTargetsTargetIdScheduledscansIdRequest = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansIdRequest, _super);
    function PatchTargetsTargetIdScheduledscansIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdScheduledscansIdPathParams)
    ], PatchTargetsTargetIdScheduledscansIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchTargetsTargetIdScheduledscansIdRequestBody)
    ], PatchTargetsTargetIdScheduledscansIdRequest.prototype, "request", void 0);
    return PatchTargetsTargetIdScheduledscansIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansIdRequest = PatchTargetsTargetIdScheduledscansIdRequest;
var PatchTargetsTargetIdScheduledscansIdResponse = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdScheduledscansIdResponse, _super);
    function PatchTargetsTargetIdScheduledscansIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdScheduledscansIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Scheduled)
    ], PatchTargetsTargetIdScheduledscansIdResponse.prototype, "scheduled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchTargetsTargetIdScheduledscansIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdScheduledscansId400ApplicationJson)
    ], PatchTargetsTargetIdScheduledscansIdResponse.prototype, "patchTargetsTargetIdScheduledscansId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdScheduledscansId401ApplicationJson)
    ], PatchTargetsTargetIdScheduledscansIdResponse.prototype, "patchTargetsTargetIdScheduledscansId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdScheduledscansId403ApplicationJson)
    ], PatchTargetsTargetIdScheduledscansIdResponse.prototype, "patchTargetsTargetIdScheduledscansId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdScheduledscansId404ApplicationJson)
    ], PatchTargetsTargetIdScheduledscansIdResponse.prototype, "patchTargetsTargetIdScheduledscansId404ApplicationJSONObject", void 0);
    return PatchTargetsTargetIdScheduledscansIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdScheduledscansIdResponse = PatchTargetsTargetIdScheduledscansIdResponse;

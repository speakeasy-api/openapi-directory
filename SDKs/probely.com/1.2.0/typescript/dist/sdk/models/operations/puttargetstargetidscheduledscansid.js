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
exports.PutTargetsTargetIdScheduledscansIdResponse = exports.PutTargetsTargetIdScheduledscansIdRequest = exports.PutTargetsTargetIdScheduledscansId404ApplicationJson = exports.PutTargetsTargetIdScheduledscansId403ApplicationJson = exports.PutTargetsTargetIdScheduledscansId401ApplicationJson = exports.PutTargetsTargetIdScheduledscansId400ApplicationJson = exports.PutTargetsTargetIdScheduledscansIdRequestBody = exports.PutTargetsTargetIdScheduledscansIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsTargetIdScheduledscansIdPathParams = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansIdPathParams, _super);
    function PutTargetsTargetIdScheduledscansIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdScheduledscansIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdScheduledscansIdPathParams.prototype, "targetId", void 0);
    return PutTargetsTargetIdScheduledscansIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansIdPathParams = PutTargetsTargetIdScheduledscansIdPathParams;
var PutTargetsTargetIdScheduledscansIdRequestBody = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansIdRequestBody, _super);
    function PutTargetsTargetIdScheduledscansIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], PutTargetsTargetIdScheduledscansIdRequestBody.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurrence" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdScheduledscansIdRequestBody.prototype, "recurrence", void 0);
    return PutTargetsTargetIdScheduledscansIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansIdRequestBody = PutTargetsTargetIdScheduledscansIdRequestBody;
var PutTargetsTargetIdScheduledscansId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansId400ApplicationJson, _super);
    function PutTargetsTargetIdScheduledscansId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdScheduledscansId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdScheduledscansId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PutTargetsTargetIdScheduledscansId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansId400ApplicationJson = PutTargetsTargetIdScheduledscansId400ApplicationJson;
var PutTargetsTargetIdScheduledscansId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansId401ApplicationJson, _super);
    function PutTargetsTargetIdScheduledscansId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdScheduledscansId401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdScheduledscansId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansId401ApplicationJson = PutTargetsTargetIdScheduledscansId401ApplicationJson;
var PutTargetsTargetIdScheduledscansId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansId403ApplicationJson, _super);
    function PutTargetsTargetIdScheduledscansId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdScheduledscansId403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdScheduledscansId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansId403ApplicationJson = PutTargetsTargetIdScheduledscansId403ApplicationJson;
var PutTargetsTargetIdScheduledscansId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansId404ApplicationJson, _super);
    function PutTargetsTargetIdScheduledscansId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdScheduledscansId404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdScheduledscansId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansId404ApplicationJson = PutTargetsTargetIdScheduledscansId404ApplicationJson;
var PutTargetsTargetIdScheduledscansIdRequest = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansIdRequest, _super);
    function PutTargetsTargetIdScheduledscansIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdScheduledscansIdPathParams)
    ], PutTargetsTargetIdScheduledscansIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTargetsTargetIdScheduledscansIdRequestBody)
    ], PutTargetsTargetIdScheduledscansIdRequest.prototype, "request", void 0);
    return PutTargetsTargetIdScheduledscansIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansIdRequest = PutTargetsTargetIdScheduledscansIdRequest;
var PutTargetsTargetIdScheduledscansIdResponse = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdScheduledscansIdResponse, _super);
    function PutTargetsTargetIdScheduledscansIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsTargetIdScheduledscansIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Scheduled)
    ], PutTargetsTargetIdScheduledscansIdResponse.prototype, "scheduled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsTargetIdScheduledscansIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdScheduledscansId400ApplicationJson)
    ], PutTargetsTargetIdScheduledscansIdResponse.prototype, "putTargetsTargetIdScheduledscansId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdScheduledscansId401ApplicationJson)
    ], PutTargetsTargetIdScheduledscansIdResponse.prototype, "putTargetsTargetIdScheduledscansId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdScheduledscansId403ApplicationJson)
    ], PutTargetsTargetIdScheduledscansIdResponse.prototype, "putTargetsTargetIdScheduledscansId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdScheduledscansId404ApplicationJson)
    ], PutTargetsTargetIdScheduledscansIdResponse.prototype, "putTargetsTargetIdScheduledscansId404ApplicationJSONObject", void 0);
    return PutTargetsTargetIdScheduledscansIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdScheduledscansIdResponse = PutTargetsTargetIdScheduledscansIdResponse;

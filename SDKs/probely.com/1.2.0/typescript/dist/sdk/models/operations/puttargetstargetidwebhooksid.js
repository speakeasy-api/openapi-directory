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
exports.PutTargetsTargetIdWebhooksIdResponse = exports.PutTargetsTargetIdWebhooksIdRequest = exports.PutTargetsTargetIdWebhooksId404ApplicationJson = exports.PutTargetsTargetIdWebhooksId403ApplicationJson = exports.PutTargetsTargetIdWebhooksId401ApplicationJson = exports.PutTargetsTargetIdWebhooksId400ApplicationJson = exports.PutTargetsTargetIdWebhooksIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsTargetIdWebhooksIdPathParams = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdWebhooksIdPathParams, _super);
    function PutTargetsTargetIdWebhooksIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdWebhooksIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdWebhooksIdPathParams.prototype, "targetId", void 0);
    return PutTargetsTargetIdWebhooksIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdWebhooksIdPathParams = PutTargetsTargetIdWebhooksIdPathParams;
var PutTargetsTargetIdWebhooksId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdWebhooksId400ApplicationJson, _super);
    function PutTargetsTargetIdWebhooksId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdWebhooksId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdWebhooksId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PutTargetsTargetIdWebhooksId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdWebhooksId400ApplicationJson = PutTargetsTargetIdWebhooksId400ApplicationJson;
var PutTargetsTargetIdWebhooksId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdWebhooksId401ApplicationJson, _super);
    function PutTargetsTargetIdWebhooksId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdWebhooksId401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdWebhooksId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdWebhooksId401ApplicationJson = PutTargetsTargetIdWebhooksId401ApplicationJson;
var PutTargetsTargetIdWebhooksId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdWebhooksId403ApplicationJson, _super);
    function PutTargetsTargetIdWebhooksId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdWebhooksId403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdWebhooksId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdWebhooksId403ApplicationJson = PutTargetsTargetIdWebhooksId403ApplicationJson;
var PutTargetsTargetIdWebhooksId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdWebhooksId404ApplicationJson, _super);
    function PutTargetsTargetIdWebhooksId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdWebhooksId404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdWebhooksId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdWebhooksId404ApplicationJson = PutTargetsTargetIdWebhooksId404ApplicationJson;
var PutTargetsTargetIdWebhooksIdRequest = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdWebhooksIdRequest, _super);
    function PutTargetsTargetIdWebhooksIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdWebhooksIdPathParams)
    ], PutTargetsTargetIdWebhooksIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebhookInput)
    ], PutTargetsTargetIdWebhooksIdRequest.prototype, "request", void 0);
    return PutTargetsTargetIdWebhooksIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdWebhooksIdRequest = PutTargetsTargetIdWebhooksIdRequest;
var PutTargetsTargetIdWebhooksIdResponse = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdWebhooksIdResponse, _super);
    function PutTargetsTargetIdWebhooksIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsTargetIdWebhooksIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsTargetIdWebhooksIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Webhook)
    ], PutTargetsTargetIdWebhooksIdResponse.prototype, "webhook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdWebhooksId400ApplicationJson)
    ], PutTargetsTargetIdWebhooksIdResponse.prototype, "putTargetsTargetIdWebhooksId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdWebhooksId401ApplicationJson)
    ], PutTargetsTargetIdWebhooksIdResponse.prototype, "putTargetsTargetIdWebhooksId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdWebhooksId403ApplicationJson)
    ], PutTargetsTargetIdWebhooksIdResponse.prototype, "putTargetsTargetIdWebhooksId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdWebhooksId404ApplicationJson)
    ], PutTargetsTargetIdWebhooksIdResponse.prototype, "putTargetsTargetIdWebhooksId404ApplicationJSONObject", void 0);
    return PutTargetsTargetIdWebhooksIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdWebhooksIdResponse = PutTargetsTargetIdWebhooksIdResponse;

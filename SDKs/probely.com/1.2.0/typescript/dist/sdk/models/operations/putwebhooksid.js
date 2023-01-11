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
exports.PutWebhooksIdResponse = exports.PutWebhooksIdRequest = exports.PutWebhooksId404ApplicationJson = exports.PutWebhooksId403ApplicationJson = exports.PutWebhooksId401ApplicationJson = exports.PutWebhooksId400ApplicationJson = exports.PutWebhooksIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutWebhooksIdPathParams = /** @class */ (function (_super) {
    __extends(PutWebhooksIdPathParams, _super);
    function PutWebhooksIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutWebhooksIdPathParams.prototype, "id", void 0);
    return PutWebhooksIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutWebhooksIdPathParams = PutWebhooksIdPathParams;
var PutWebhooksId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutWebhooksId400ApplicationJson, _super);
    function PutWebhooksId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PutWebhooksId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PutWebhooksId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PutWebhooksId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutWebhooksId400ApplicationJson = PutWebhooksId400ApplicationJson;
var PutWebhooksId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutWebhooksId401ApplicationJson, _super);
    function PutWebhooksId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutWebhooksId401ApplicationJson.prototype, "detail", void 0);
    return PutWebhooksId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutWebhooksId401ApplicationJson = PutWebhooksId401ApplicationJson;
var PutWebhooksId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutWebhooksId403ApplicationJson, _super);
    function PutWebhooksId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutWebhooksId403ApplicationJson.prototype, "detail", void 0);
    return PutWebhooksId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutWebhooksId403ApplicationJson = PutWebhooksId403ApplicationJson;
var PutWebhooksId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutWebhooksId404ApplicationJson, _super);
    function PutWebhooksId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutWebhooksId404ApplicationJson.prototype, "detail", void 0);
    return PutWebhooksId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutWebhooksId404ApplicationJson = PutWebhooksId404ApplicationJson;
var PutWebhooksIdRequest = /** @class */ (function (_super) {
    __extends(PutWebhooksIdRequest, _super);
    function PutWebhooksIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutWebhooksIdPathParams)
    ], PutWebhooksIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebhookInput)
    ], PutWebhooksIdRequest.prototype, "request", void 0);
    return PutWebhooksIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutWebhooksIdRequest = PutWebhooksIdRequest;
var PutWebhooksIdResponse = /** @class */ (function (_super) {
    __extends(PutWebhooksIdResponse, _super);
    function PutWebhooksIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutWebhooksIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutWebhooksIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Webhook)
    ], PutWebhooksIdResponse.prototype, "webhook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutWebhooksId400ApplicationJson)
    ], PutWebhooksIdResponse.prototype, "putWebhooksId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutWebhooksId401ApplicationJson)
    ], PutWebhooksIdResponse.prototype, "putWebhooksId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutWebhooksId403ApplicationJson)
    ], PutWebhooksIdResponse.prototype, "putWebhooksId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutWebhooksId404ApplicationJson)
    ], PutWebhooksIdResponse.prototype, "putWebhooksId404ApplicationJSONObject", void 0);
    return PutWebhooksIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutWebhooksIdResponse = PutWebhooksIdResponse;

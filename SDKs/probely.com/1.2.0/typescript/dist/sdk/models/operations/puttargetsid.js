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
exports.PutTargetsIdResponse = exports.PutTargetsIdRequest = exports.PutTargetsId404ApplicationJson = exports.PutTargetsId403ApplicationJson = exports.PutTargetsId401ApplicationJson = exports.PutTargetsId400ApplicationJson = exports.PutTargetsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsIdPathParams = /** @class */ (function (_super) {
    __extends(PutTargetsIdPathParams, _super);
    function PutTargetsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTargetsIdPathParams.prototype, "id", void 0);
    return PutTargetsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsIdPathParams = PutTargetsIdPathParams;
var PutTargetsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsId400ApplicationJson, _super);
    function PutTargetsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PutTargetsId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PutTargetsId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PutTargetsId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsId400ApplicationJson = PutTargetsId400ApplicationJson;
var PutTargetsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsId401ApplicationJson, _super);
    function PutTargetsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsId401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsId401ApplicationJson = PutTargetsId401ApplicationJson;
var PutTargetsId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsId403ApplicationJson, _super);
    function PutTargetsId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsId403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsId403ApplicationJson = PutTargetsId403ApplicationJson;
var PutTargetsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsId404ApplicationJson, _super);
    function PutTargetsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsId404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsId404ApplicationJson = PutTargetsId404ApplicationJson;
var PutTargetsIdRequest = /** @class */ (function (_super) {
    __extends(PutTargetsIdRequest, _super);
    function PutTargetsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsIdPathParams)
    ], PutTargetsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetInput)
    ], PutTargetsIdRequest.prototype, "request", void 0);
    return PutTargetsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsIdRequest = PutTargetsIdRequest;
var PutTargetsIdResponse = /** @class */ (function (_super) {
    __extends(PutTargetsIdResponse, _super);
    function PutTargetsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Target)
    ], PutTargetsIdResponse.prototype, "target", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsId400ApplicationJson)
    ], PutTargetsIdResponse.prototype, "putTargetsId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsId401ApplicationJson)
    ], PutTargetsIdResponse.prototype, "putTargetsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsId403ApplicationJson)
    ], PutTargetsIdResponse.prototype, "putTargetsId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsId404ApplicationJson)
    ], PutTargetsIdResponse.prototype, "putTargetsId404ApplicationJSONObject", void 0);
    return PutTargetsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsIdResponse = PutTargetsIdResponse;

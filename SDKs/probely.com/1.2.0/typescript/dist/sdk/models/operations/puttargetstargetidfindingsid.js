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
exports.PutTargetsTargetIdFindingsIdResponse = exports.PutTargetsTargetIdFindingsIdRequest = exports.PutTargetsTargetIdFindingsId404ApplicationJson = exports.PutTargetsTargetIdFindingsId403ApplicationJson = exports.PutTargetsTargetIdFindingsId401ApplicationJson = exports.PutTargetsTargetIdFindingsId400ApplicationJson = exports.PutTargetsTargetIdFindingsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsTargetIdFindingsIdPathParams = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdPathParams, _super);
    function PutTargetsTargetIdFindingsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdPathParams.prototype, "targetId", void 0);
    return PutTargetsTargetIdFindingsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdPathParams = PutTargetsTargetIdFindingsIdPathParams;
var PutTargetsTargetIdFindingsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsId400ApplicationJson, _super);
    function PutTargetsTargetIdFindingsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdFindingsId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdFindingsId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PutTargetsTargetIdFindingsId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsId400ApplicationJson = PutTargetsTargetIdFindingsId400ApplicationJson;
var PutTargetsTargetIdFindingsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsId401ApplicationJson, _super);
    function PutTargetsTargetIdFindingsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsId401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsId401ApplicationJson = PutTargetsTargetIdFindingsId401ApplicationJson;
var PutTargetsTargetIdFindingsId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsId403ApplicationJson, _super);
    function PutTargetsTargetIdFindingsId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsId403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsId403ApplicationJson = PutTargetsTargetIdFindingsId403ApplicationJson;
var PutTargetsTargetIdFindingsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsId404ApplicationJson, _super);
    function PutTargetsTargetIdFindingsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsId404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsId404ApplicationJson = PutTargetsTargetIdFindingsId404ApplicationJson;
var PutTargetsTargetIdFindingsIdRequest = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdRequest, _super);
    function PutTargetsTargetIdFindingsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdPathParams)
    ], PutTargetsTargetIdFindingsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FindingUpdateInput)
    ], PutTargetsTargetIdFindingsIdRequest.prototype, "request", void 0);
    return PutTargetsTargetIdFindingsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdRequest = PutTargetsTargetIdFindingsIdRequest;
var PutTargetsTargetIdFindingsIdResponse = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdResponse, _super);
    function PutTargetsTargetIdFindingsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Finding)
    ], PutTargetsTargetIdFindingsIdResponse.prototype, "finding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsTargetIdFindingsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsId400ApplicationJson)
    ], PutTargetsTargetIdFindingsIdResponse.prototype, "putTargetsTargetIdFindingsId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsId401ApplicationJson)
    ], PutTargetsTargetIdFindingsIdResponse.prototype, "putTargetsTargetIdFindingsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsId403ApplicationJson)
    ], PutTargetsTargetIdFindingsIdResponse.prototype, "putTargetsTargetIdFindingsId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsId404ApplicationJson)
    ], PutTargetsTargetIdFindingsIdResponse.prototype, "putTargetsTargetIdFindingsId404ApplicationJSONObject", void 0);
    return PutTargetsTargetIdFindingsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdResponse = PutTargetsTargetIdFindingsIdResponse;

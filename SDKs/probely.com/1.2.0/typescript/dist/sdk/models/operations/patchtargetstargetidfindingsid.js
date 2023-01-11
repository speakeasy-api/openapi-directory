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
exports.PatchTargetsTargetIdFindingsIdResponse = exports.PatchTargetsTargetIdFindingsIdRequest = exports.PatchTargetsTargetIdFindingsId404ApplicationJson = exports.PatchTargetsTargetIdFindingsId403ApplicationJson = exports.PatchTargetsTargetIdFindingsId401ApplicationJson = exports.PatchTargetsTargetIdFindingsId400ApplicationJson = exports.PatchTargetsTargetIdFindingsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchTargetsTargetIdFindingsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdPathParams, _super);
    function PatchTargetsTargetIdFindingsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdPathParams.prototype, "targetId", void 0);
    return PatchTargetsTargetIdFindingsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdPathParams = PatchTargetsTargetIdFindingsIdPathParams;
var PatchTargetsTargetIdFindingsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsId400ApplicationJson, _super);
    function PatchTargetsTargetIdFindingsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PatchTargetsTargetIdFindingsId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PatchTargetsTargetIdFindingsId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PatchTargetsTargetIdFindingsId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsId400ApplicationJson = PatchTargetsTargetIdFindingsId400ApplicationJson;
var PatchTargetsTargetIdFindingsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsId401ApplicationJson, _super);
    function PatchTargetsTargetIdFindingsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsId401ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdFindingsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsId401ApplicationJson = PatchTargetsTargetIdFindingsId401ApplicationJson;
var PatchTargetsTargetIdFindingsId403ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsId403ApplicationJson, _super);
    function PatchTargetsTargetIdFindingsId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsId403ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdFindingsId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsId403ApplicationJson = PatchTargetsTargetIdFindingsId403ApplicationJson;
var PatchTargetsTargetIdFindingsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsId404ApplicationJson, _super);
    function PatchTargetsTargetIdFindingsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsId404ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdFindingsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsId404ApplicationJson = PatchTargetsTargetIdFindingsId404ApplicationJson;
var PatchTargetsTargetIdFindingsIdRequest = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdRequest, _super);
    function PatchTargetsTargetIdFindingsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsIdPathParams)
    ], PatchTargetsTargetIdFindingsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FindingUpdateInput)
    ], PatchTargetsTargetIdFindingsIdRequest.prototype, "request", void 0);
    return PatchTargetsTargetIdFindingsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdRequest = PatchTargetsTargetIdFindingsIdRequest;
var PatchTargetsTargetIdFindingsIdResponse = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdResponse, _super);
    function PatchTargetsTargetIdFindingsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Finding)
    ], PatchTargetsTargetIdFindingsIdResponse.prototype, "finding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchTargetsTargetIdFindingsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsId400ApplicationJson)
    ], PatchTargetsTargetIdFindingsIdResponse.prototype, "patchTargetsTargetIdFindingsId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsId401ApplicationJson)
    ], PatchTargetsTargetIdFindingsIdResponse.prototype, "patchTargetsTargetIdFindingsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsId403ApplicationJson)
    ], PatchTargetsTargetIdFindingsIdResponse.prototype, "patchTargetsTargetIdFindingsId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsId404ApplicationJson)
    ], PatchTargetsTargetIdFindingsIdResponse.prototype, "patchTargetsTargetIdFindingsId404ApplicationJSONObject", void 0);
    return PatchTargetsTargetIdFindingsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdResponse = PatchTargetsTargetIdFindingsIdResponse;

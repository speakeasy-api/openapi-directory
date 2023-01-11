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
exports.PatchTargetsTargetIdSiteResponse = exports.PatchTargetsTargetIdSiteRequest = exports.PatchTargetsTargetIdSite404ApplicationJson = exports.PatchTargetsTargetIdSite403ApplicationJson = exports.PatchTargetsTargetIdSite401ApplicationJson = exports.PatchTargetsTargetIdSite400ApplicationJson = exports.PatchTargetsTargetIdSitePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchTargetsTargetIdSitePathParams = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdSitePathParams, _super);
    function PatchTargetsTargetIdSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdSitePathParams.prototype, "targetId", void 0);
    return PatchTargetsTargetIdSitePathParams;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdSitePathParams = PatchTargetsTargetIdSitePathParams;
var PatchTargetsTargetIdSite400ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdSite400ApplicationJson, _super);
    function PatchTargetsTargetIdSite400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PatchTargetsTargetIdSite400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PatchTargetsTargetIdSite400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PatchTargetsTargetIdSite400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdSite400ApplicationJson = PatchTargetsTargetIdSite400ApplicationJson;
var PatchTargetsTargetIdSite401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdSite401ApplicationJson, _super);
    function PatchTargetsTargetIdSite401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdSite401ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdSite401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdSite401ApplicationJson = PatchTargetsTargetIdSite401ApplicationJson;
var PatchTargetsTargetIdSite403ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdSite403ApplicationJson, _super);
    function PatchTargetsTargetIdSite403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdSite403ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdSite403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdSite403ApplicationJson = PatchTargetsTargetIdSite403ApplicationJson;
var PatchTargetsTargetIdSite404ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdSite404ApplicationJson, _super);
    function PatchTargetsTargetIdSite404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdSite404ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdSite404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdSite404ApplicationJson = PatchTargetsTargetIdSite404ApplicationJson;
var PatchTargetsTargetIdSiteRequest = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdSiteRequest, _super);
    function PatchTargetsTargetIdSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdSitePathParams)
    ], PatchTargetsTargetIdSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SiteInput)
    ], PatchTargetsTargetIdSiteRequest.prototype, "request", void 0);
    return PatchTargetsTargetIdSiteRequest;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdSiteRequest = PatchTargetsTargetIdSiteRequest;
var PatchTargetsTargetIdSiteResponse = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdSiteResponse, _super);
    function PatchTargetsTargetIdSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdSiteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Site)
    ], PatchTargetsTargetIdSiteResponse.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchTargetsTargetIdSiteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdSite400ApplicationJson)
    ], PatchTargetsTargetIdSiteResponse.prototype, "patchTargetsTargetIdSite400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdSite401ApplicationJson)
    ], PatchTargetsTargetIdSiteResponse.prototype, "patchTargetsTargetIdSite401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdSite403ApplicationJson)
    ], PatchTargetsTargetIdSiteResponse.prototype, "patchTargetsTargetIdSite403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdSite404ApplicationJson)
    ], PatchTargetsTargetIdSiteResponse.prototype, "patchTargetsTargetIdSite404ApplicationJSONObject", void 0);
    return PatchTargetsTargetIdSiteResponse;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdSiteResponse = PatchTargetsTargetIdSiteResponse;

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
exports.PutTargetsTargetIdSiteResponse = exports.PutTargetsTargetIdSiteRequest = exports.PutTargetsTargetIdSite404ApplicationJson = exports.PutTargetsTargetIdSite403ApplicationJson = exports.PutTargetsTargetIdSite401ApplicationJson = exports.PutTargetsTargetIdSite400ApplicationJson = exports.PutTargetsTargetIdSitePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsTargetIdSitePathParams = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdSitePathParams, _super);
    function PutTargetsTargetIdSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdSitePathParams.prototype, "targetId", void 0);
    return PutTargetsTargetIdSitePathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdSitePathParams = PutTargetsTargetIdSitePathParams;
var PutTargetsTargetIdSite400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdSite400ApplicationJson, _super);
    function PutTargetsTargetIdSite400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdSite400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PutTargetsTargetIdSite400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PutTargetsTargetIdSite400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdSite400ApplicationJson = PutTargetsTargetIdSite400ApplicationJson;
var PutTargetsTargetIdSite401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdSite401ApplicationJson, _super);
    function PutTargetsTargetIdSite401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdSite401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdSite401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdSite401ApplicationJson = PutTargetsTargetIdSite401ApplicationJson;
var PutTargetsTargetIdSite403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdSite403ApplicationJson, _super);
    function PutTargetsTargetIdSite403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdSite403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdSite403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdSite403ApplicationJson = PutTargetsTargetIdSite403ApplicationJson;
var PutTargetsTargetIdSite404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdSite404ApplicationJson, _super);
    function PutTargetsTargetIdSite404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdSite404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdSite404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdSite404ApplicationJson = PutTargetsTargetIdSite404ApplicationJson;
var PutTargetsTargetIdSiteRequest = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdSiteRequest, _super);
    function PutTargetsTargetIdSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdSitePathParams)
    ], PutTargetsTargetIdSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SiteInput)
    ], PutTargetsTargetIdSiteRequest.prototype, "request", void 0);
    return PutTargetsTargetIdSiteRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdSiteRequest = PutTargetsTargetIdSiteRequest;
var PutTargetsTargetIdSiteResponse = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdSiteResponse, _super);
    function PutTargetsTargetIdSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsTargetIdSiteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Site)
    ], PutTargetsTargetIdSiteResponse.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsTargetIdSiteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdSite400ApplicationJson)
    ], PutTargetsTargetIdSiteResponse.prototype, "putTargetsTargetIdSite400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdSite401ApplicationJson)
    ], PutTargetsTargetIdSiteResponse.prototype, "putTargetsTargetIdSite401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdSite403ApplicationJson)
    ], PutTargetsTargetIdSiteResponse.prototype, "putTargetsTargetIdSite403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdSite404ApplicationJson)
    ], PutTargetsTargetIdSiteResponse.prototype, "putTargetsTargetIdSite404ApplicationJSONObject", void 0);
    return PutTargetsTargetIdSiteResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdSiteResponse = PutTargetsTargetIdSiteResponse;

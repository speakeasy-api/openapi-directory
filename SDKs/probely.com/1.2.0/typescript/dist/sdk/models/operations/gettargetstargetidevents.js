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
exports.GetTargetsTargetIdEventsResponse = exports.GetTargetsTargetIdEventsRequest = exports.GetTargetsTargetIdEvents404ApplicationJson = exports.GetTargetsTargetIdEvents403ApplicationJson = exports.GetTargetsTargetIdEvents401ApplicationJson = exports.GetTargetsTargetIdEvents200ApplicationJson = exports.GetTargetsTargetIdEventsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdEventsPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsPathParams, _super);
    function GetTargetsTargetIdEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdEventsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsPathParams = GetTargetsTargetIdEventsPathParams;
var GetTargetsTargetIdEvents200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEvents200ApplicationJson, _super);
    function GetTargetsTargetIdEvents200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdEvents200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdEvents200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdEvents200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdEvents200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Event }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdEvents200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdEvents200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEvents200ApplicationJson = GetTargetsTargetIdEvents200ApplicationJson;
var GetTargetsTargetIdEvents401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEvents401ApplicationJson, _super);
    function GetTargetsTargetIdEvents401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEvents401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdEvents401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEvents401ApplicationJson = GetTargetsTargetIdEvents401ApplicationJson;
var GetTargetsTargetIdEvents403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEvents403ApplicationJson, _super);
    function GetTargetsTargetIdEvents403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEvents403ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdEvents403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEvents403ApplicationJson = GetTargetsTargetIdEvents403ApplicationJson;
var GetTargetsTargetIdEvents404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEvents404ApplicationJson, _super);
    function GetTargetsTargetIdEvents404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEvents404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdEvents404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEvents404ApplicationJson = GetTargetsTargetIdEvents404ApplicationJson;
var GetTargetsTargetIdEventsRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsRequest, _super);
    function GetTargetsTargetIdEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEventsPathParams)
    ], GetTargetsTargetIdEventsRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdEventsRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsRequest = GetTargetsTargetIdEventsRequest;
var GetTargetsTargetIdEventsResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsResponse, _super);
    function GetTargetsTargetIdEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEvents200ApplicationJson)
    ], GetTargetsTargetIdEventsResponse.prototype, "getTargetsTargetIdEvents200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEvents401ApplicationJson)
    ], GetTargetsTargetIdEventsResponse.prototype, "getTargetsTargetIdEvents401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEvents403ApplicationJson)
    ], GetTargetsTargetIdEventsResponse.prototype, "getTargetsTargetIdEvents403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEvents404ApplicationJson)
    ], GetTargetsTargetIdEventsResponse.prototype, "getTargetsTargetIdEvents404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdEventsResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsResponse = GetTargetsTargetIdEventsResponse;

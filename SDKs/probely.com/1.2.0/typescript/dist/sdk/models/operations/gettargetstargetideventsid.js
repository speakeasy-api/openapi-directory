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
exports.GetTargetsTargetIdEventsIdResponse = exports.GetTargetsTargetIdEventsIdRequest = exports.GetTargetsTargetIdEventsId404ApplicationJson = exports.GetTargetsTargetIdEventsId403ApplicationJson = exports.GetTargetsTargetIdEventsId401ApplicationJson = exports.GetTargetsTargetIdEventsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdEventsIdPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsIdPathParams, _super);
    function GetTargetsTargetIdEventsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsIdPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdEventsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsIdPathParams = GetTargetsTargetIdEventsIdPathParams;
var GetTargetsTargetIdEventsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsId401ApplicationJson, _super);
    function GetTargetsTargetIdEventsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsId401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdEventsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsId401ApplicationJson = GetTargetsTargetIdEventsId401ApplicationJson;
var GetTargetsTargetIdEventsId403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsId403ApplicationJson, _super);
    function GetTargetsTargetIdEventsId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsId403ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdEventsId403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsId403ApplicationJson = GetTargetsTargetIdEventsId403ApplicationJson;
var GetTargetsTargetIdEventsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsId404ApplicationJson, _super);
    function GetTargetsTargetIdEventsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsId404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdEventsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsId404ApplicationJson = GetTargetsTargetIdEventsId404ApplicationJson;
var GetTargetsTargetIdEventsIdRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsIdRequest, _super);
    function GetTargetsTargetIdEventsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEventsIdPathParams)
    ], GetTargetsTargetIdEventsIdRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdEventsIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsIdRequest = GetTargetsTargetIdEventsIdRequest;
var GetTargetsTargetIdEventsIdResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdEventsIdResponse, _super);
    function GetTargetsTargetIdEventsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdEventsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Event)
    ], GetTargetsTargetIdEventsIdResponse.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdEventsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEventsId401ApplicationJson)
    ], GetTargetsTargetIdEventsIdResponse.prototype, "getTargetsTargetIdEventsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEventsId403ApplicationJson)
    ], GetTargetsTargetIdEventsIdResponse.prototype, "getTargetsTargetIdEventsId403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdEventsId404ApplicationJson)
    ], GetTargetsTargetIdEventsIdResponse.prototype, "getTargetsTargetIdEventsId404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdEventsIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdEventsIdResponse = GetTargetsTargetIdEventsIdResponse;

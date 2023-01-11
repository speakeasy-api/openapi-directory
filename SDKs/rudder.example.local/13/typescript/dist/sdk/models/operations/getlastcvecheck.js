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
exports.GetLastCveCheckResponse = exports.GetLastCveCheck200ApplicationJson = exports.GetLastCveCheck200ApplicationJsonResultEnum = exports.GetLastCveCheck200ApplicationJsonData = exports.GetLastCveCheck200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetLastCveCheck200ApplicationJsonActionEnum;
(function (GetLastCveCheck200ApplicationJsonActionEnum) {
    GetLastCveCheck200ApplicationJsonActionEnum["GetLastCveCheck"] = "getLastCVECheck";
})(GetLastCveCheck200ApplicationJsonActionEnum = exports.GetLastCveCheck200ApplicationJsonActionEnum || (exports.GetLastCveCheck200ApplicationJsonActionEnum = {}));
var GetLastCveCheck200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetLastCveCheck200ApplicationJsonData, _super);
    function GetLastCveCheck200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CVEChecks", elemType: shared.CveCheck }),
        __metadata("design:type", Array)
    ], GetLastCveCheck200ApplicationJsonData.prototype, "cveChecks", void 0);
    return GetLastCveCheck200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetLastCveCheck200ApplicationJsonData = GetLastCveCheck200ApplicationJsonData;
var GetLastCveCheck200ApplicationJsonResultEnum;
(function (GetLastCveCheck200ApplicationJsonResultEnum) {
    GetLastCveCheck200ApplicationJsonResultEnum["Success"] = "success";
    GetLastCveCheck200ApplicationJsonResultEnum["Error"] = "error";
})(GetLastCveCheck200ApplicationJsonResultEnum = exports.GetLastCveCheck200ApplicationJsonResultEnum || (exports.GetLastCveCheck200ApplicationJsonResultEnum = {}));
var GetLastCveCheck200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLastCveCheck200ApplicationJson, _super);
    function GetLastCveCheck200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetLastCveCheck200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetLastCveCheck200ApplicationJsonData)
    ], GetLastCveCheck200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetLastCveCheck200ApplicationJson.prototype, "result", void 0);
    return GetLastCveCheck200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLastCveCheck200ApplicationJson = GetLastCveCheck200ApplicationJson;
var GetLastCveCheckResponse = /** @class */ (function (_super) {
    __extends(GetLastCveCheckResponse, _super);
    function GetLastCveCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLastCveCheckResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLastCveCheckResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLastCveCheck200ApplicationJson)
    ], GetLastCveCheckResponse.prototype, "getLastCVECheck200ApplicationJSONObject", void 0);
    return GetLastCveCheckResponse;
}(utils_1.SpeakeasyBase));
exports.GetLastCveCheckResponse = GetLastCveCheckResponse;

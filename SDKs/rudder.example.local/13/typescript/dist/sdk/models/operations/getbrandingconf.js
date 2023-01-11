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
exports.GetBrandingConfResponse = exports.GetBrandingConf200ApplicationJson = exports.GetBrandingConf200ApplicationJsonResultEnum = exports.GetBrandingConf200ApplicationJsonData = exports.GetBrandingConf200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetBrandingConf200ApplicationJsonActionEnum;
(function (GetBrandingConf200ApplicationJsonActionEnum) {
    GetBrandingConf200ApplicationJsonActionEnum["GetBrandingConf"] = "getBrandingConf";
})(GetBrandingConf200ApplicationJsonActionEnum = exports.GetBrandingConf200ApplicationJsonActionEnum || (exports.GetBrandingConf200ApplicationJsonActionEnum = {}));
var GetBrandingConf200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetBrandingConf200ApplicationJsonData, _super);
    function GetBrandingConf200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branding" }),
        __metadata("design:type", shared.BrandingConf)
    ], GetBrandingConf200ApplicationJsonData.prototype, "branding", void 0);
    return GetBrandingConf200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetBrandingConf200ApplicationJsonData = GetBrandingConf200ApplicationJsonData;
var GetBrandingConf200ApplicationJsonResultEnum;
(function (GetBrandingConf200ApplicationJsonResultEnum) {
    GetBrandingConf200ApplicationJsonResultEnum["Success"] = "success";
    GetBrandingConf200ApplicationJsonResultEnum["Error"] = "error";
})(GetBrandingConf200ApplicationJsonResultEnum = exports.GetBrandingConf200ApplicationJsonResultEnum || (exports.GetBrandingConf200ApplicationJsonResultEnum = {}));
var GetBrandingConf200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBrandingConf200ApplicationJson, _super);
    function GetBrandingConf200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetBrandingConf200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetBrandingConf200ApplicationJsonData)
    ], GetBrandingConf200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetBrandingConf200ApplicationJson.prototype, "result", void 0);
    return GetBrandingConf200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetBrandingConf200ApplicationJson = GetBrandingConf200ApplicationJson;
var GetBrandingConfResponse = /** @class */ (function (_super) {
    __extends(GetBrandingConfResponse, _super);
    function GetBrandingConfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetBrandingConfResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetBrandingConfResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBrandingConf200ApplicationJson)
    ], GetBrandingConfResponse.prototype, "getBrandingConf200ApplicationJSONObject", void 0);
    return GetBrandingConfResponse;
}(utils_1.SpeakeasyBase));
exports.GetBrandingConfResponse = GetBrandingConfResponse;

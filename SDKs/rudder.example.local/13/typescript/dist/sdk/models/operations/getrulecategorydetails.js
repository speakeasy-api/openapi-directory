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
exports.GetRuleCategoryDetailsResponse = exports.GetRuleCategoryDetailsRequest = exports.GetRuleCategoryDetails200ApplicationJson = exports.GetRuleCategoryDetails200ApplicationJsonResultEnum = exports.GetRuleCategoryDetails200ApplicationJsonData = exports.GetRuleCategoryDetails200ApplicationJsonActionEnum = exports.GetRuleCategoryDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRuleCategoryDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetailsPathParams, _super);
    function GetRuleCategoryDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" }),
        __metadata("design:type", String)
    ], GetRuleCategoryDetailsPathParams.prototype, "ruleCategoryId", void 0);
    return GetRuleCategoryDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRuleCategoryDetailsPathParams = GetRuleCategoryDetailsPathParams;
var GetRuleCategoryDetails200ApplicationJsonActionEnum;
(function (GetRuleCategoryDetails200ApplicationJsonActionEnum) {
    GetRuleCategoryDetails200ApplicationJsonActionEnum["GetRuleCategoryDetails"] = "GetRuleCategoryDetails";
})(GetRuleCategoryDetails200ApplicationJsonActionEnum = exports.GetRuleCategoryDetails200ApplicationJsonActionEnum || (exports.GetRuleCategoryDetails200ApplicationJsonActionEnum = {}));
var GetRuleCategoryDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetails200ApplicationJsonData, _super);
    function GetRuleCategoryDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rulesCategories", elemType: shared.RuleCategory }),
        __metadata("design:type", Array)
    ], GetRuleCategoryDetails200ApplicationJsonData.prototype, "rulesCategories", void 0);
    return GetRuleCategoryDetails200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.GetRuleCategoryDetails200ApplicationJsonData = GetRuleCategoryDetails200ApplicationJsonData;
var GetRuleCategoryDetails200ApplicationJsonResultEnum;
(function (GetRuleCategoryDetails200ApplicationJsonResultEnum) {
    GetRuleCategoryDetails200ApplicationJsonResultEnum["Success"] = "success";
    GetRuleCategoryDetails200ApplicationJsonResultEnum["Error"] = "error";
})(GetRuleCategoryDetails200ApplicationJsonResultEnum = exports.GetRuleCategoryDetails200ApplicationJsonResultEnum || (exports.GetRuleCategoryDetails200ApplicationJsonResultEnum = {}));
var GetRuleCategoryDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetails200ApplicationJson, _super);
    function GetRuleCategoryDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetRuleCategoryDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", GetRuleCategoryDetails200ApplicationJsonData)
    ], GetRuleCategoryDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetRuleCategoryDetails200ApplicationJson.prototype, "result", void 0);
    return GetRuleCategoryDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRuleCategoryDetails200ApplicationJson = GetRuleCategoryDetails200ApplicationJson;
var GetRuleCategoryDetailsRequest = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetailsRequest, _super);
    function GetRuleCategoryDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRuleCategoryDetailsPathParams)
    ], GetRuleCategoryDetailsRequest.prototype, "pathParams", void 0);
    return GetRuleCategoryDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.GetRuleCategoryDetailsRequest = GetRuleCategoryDetailsRequest;
var GetRuleCategoryDetailsResponse = /** @class */ (function (_super) {
    __extends(GetRuleCategoryDetailsResponse, _super);
    function GetRuleCategoryDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRuleCategoryDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRuleCategoryDetails200ApplicationJson)
    ], GetRuleCategoryDetailsResponse.prototype, "getRuleCategoryDetails200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRuleCategoryDetailsResponse.prototype, "statusCode", void 0);
    return GetRuleCategoryDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.GetRuleCategoryDetailsResponse = GetRuleCategoryDetailsResponse;

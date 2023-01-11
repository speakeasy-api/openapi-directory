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
exports.GetResponsivityResponse = exports.GetResponsivityRequest = exports.GetResponsivityQueryParams = exports.GetResponsivityPeriodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetResponsivityPeriodEnum;
(function (GetResponsivityPeriodEnum) {
    GetResponsivityPeriodEnum["Monthly"] = "monthly";
    GetResponsivityPeriodEnum["Weekly"] = "weekly";
})(GetResponsivityPeriodEnum = exports.GetResponsivityPeriodEnum || (exports.GetResponsivityPeriodEnum = {}));
var GetResponsivityQueryParams = /** @class */ (function (_super) {
    __extends(GetResponsivityQueryParams, _super);
    function GetResponsivityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], GetResponsivityQueryParams.prototype, "period", void 0);
    return GetResponsivityQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResponsivityQueryParams = GetResponsivityQueryParams;
var GetResponsivityRequest = /** @class */ (function (_super) {
    __extends(GetResponsivityRequest, _super);
    function GetResponsivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResponsivityQueryParams)
    ], GetResponsivityRequest.prototype, "queryParams", void 0);
    return GetResponsivityRequest;
}(utils_1.SpeakeasyBase));
exports.GetResponsivityRequest = GetResponsivityRequest;
var GetResponsivityResponse = /** @class */ (function (_super) {
    __extends(GetResponsivityResponse, _super);
    function GetResponsivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResponsivityResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetResponsivityResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ResponsivityList)
    ], GetResponsivityResponse.prototype, "responsivityList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResponsivityResponse.prototype, "statusCode", void 0);
    return GetResponsivityResponse;
}(utils_1.SpeakeasyBase));
exports.GetResponsivityResponse = GetResponsivityResponse;

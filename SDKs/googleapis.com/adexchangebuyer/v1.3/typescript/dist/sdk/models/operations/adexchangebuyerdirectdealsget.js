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
exports.AdexchangebuyerDirectDealsGetResponse = exports.AdexchangebuyerDirectDealsGetRequest = exports.AdexchangebuyerDirectDealsGetSecurity = exports.AdexchangebuyerDirectDealsGetQueryParams = exports.AdexchangebuyerDirectDealsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AdexchangebuyerDirectDealsGetPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerDirectDealsGetPathParams, _super);
    function AdexchangebuyerDirectDealsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetPathParams.prototype, "id", void 0);
    return AdexchangebuyerDirectDealsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerDirectDealsGetPathParams = AdexchangebuyerDirectDealsGetPathParams;
var AdexchangebuyerDirectDealsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerDirectDealsGetQueryParams, _super);
    function AdexchangebuyerDirectDealsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerDirectDealsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerDirectDealsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerDirectDealsGetQueryParams = AdexchangebuyerDirectDealsGetQueryParams;
var AdexchangebuyerDirectDealsGetSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerDirectDealsGetSecurity, _super);
    function AdexchangebuyerDirectDealsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerDirectDealsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerDirectDealsGetSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerDirectDealsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerDirectDealsGetSecurity = AdexchangebuyerDirectDealsGetSecurity;
var AdexchangebuyerDirectDealsGetRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerDirectDealsGetRequest, _super);
    function AdexchangebuyerDirectDealsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerDirectDealsGetPathParams)
    ], AdexchangebuyerDirectDealsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerDirectDealsGetQueryParams)
    ], AdexchangebuyerDirectDealsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdexchangebuyerDirectDealsGetSecurity)
    ], AdexchangebuyerDirectDealsGetRequest.prototype, "security", void 0);
    return AdexchangebuyerDirectDealsGetRequest;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerDirectDealsGetRequest = AdexchangebuyerDirectDealsGetRequest;
var AdexchangebuyerDirectDealsGetResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerDirectDealsGetResponse, _super);
    function AdexchangebuyerDirectDealsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AdexchangebuyerDirectDealsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DirectDeal)
    ], AdexchangebuyerDirectDealsGetResponse.prototype, "directDeal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AdexchangebuyerDirectDealsGetResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerDirectDealsGetResponse;
}(utils_1.SpeakeasyBase));
exports.AdexchangebuyerDirectDealsGetResponse = AdexchangebuyerDirectDealsGetResponse;

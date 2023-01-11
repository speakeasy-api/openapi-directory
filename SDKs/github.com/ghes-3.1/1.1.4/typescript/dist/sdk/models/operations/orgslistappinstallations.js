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
exports.OrgsListAppInstallationsResponse = exports.OrgsListAppInstallationsRequest = exports.OrgsListAppInstallations200ApplicationJson = exports.OrgsListAppInstallationsQueryParams = exports.OrgsListAppInstallationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var OrgsListAppInstallationsPathParams = /** @class */ (function (_super) {
    __extends(OrgsListAppInstallationsPathParams, _super);
    function OrgsListAppInstallationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsListAppInstallationsPathParams.prototype, "org", void 0);
    return OrgsListAppInstallationsPathParams;
}(utils_1.SpeakeasyBase));
exports.OrgsListAppInstallationsPathParams = OrgsListAppInstallationsPathParams;
var OrgsListAppInstallationsQueryParams = /** @class */ (function (_super) {
    __extends(OrgsListAppInstallationsQueryParams, _super);
    function OrgsListAppInstallationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], OrgsListAppInstallationsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], OrgsListAppInstallationsQueryParams.prototype, "perPage", void 0);
    return OrgsListAppInstallationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.OrgsListAppInstallationsQueryParams = OrgsListAppInstallationsQueryParams;
var OrgsListAppInstallations200ApplicationJson = /** @class */ (function (_super) {
    __extends(OrgsListAppInstallations200ApplicationJson, _super);
    function OrgsListAppInstallations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=installations", elemType: shared.Installation }),
        __metadata("design:type", Array)
    ], OrgsListAppInstallations200ApplicationJson.prototype, "installations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], OrgsListAppInstallations200ApplicationJson.prototype, "totalCount", void 0);
    return OrgsListAppInstallations200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.OrgsListAppInstallations200ApplicationJson = OrgsListAppInstallations200ApplicationJson;
var OrgsListAppInstallationsRequest = /** @class */ (function (_super) {
    __extends(OrgsListAppInstallationsRequest, _super);
    function OrgsListAppInstallationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrgsListAppInstallationsPathParams)
    ], OrgsListAppInstallationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrgsListAppInstallationsQueryParams)
    ], OrgsListAppInstallationsRequest.prototype, "queryParams", void 0);
    return OrgsListAppInstallationsRequest;
}(utils_1.SpeakeasyBase));
exports.OrgsListAppInstallationsRequest = OrgsListAppInstallationsRequest;
var OrgsListAppInstallationsResponse = /** @class */ (function (_super) {
    __extends(OrgsListAppInstallationsResponse, _super);
    function OrgsListAppInstallationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], OrgsListAppInstallationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], OrgsListAppInstallationsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], OrgsListAppInstallationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrgsListAppInstallations200ApplicationJson)
    ], OrgsListAppInstallationsResponse.prototype, "orgsListAppInstallations200ApplicationJSONObject", void 0);
    return OrgsListAppInstallationsResponse;
}(utils_1.SpeakeasyBase));
exports.OrgsListAppInstallationsResponse = OrgsListAppInstallationsResponse;

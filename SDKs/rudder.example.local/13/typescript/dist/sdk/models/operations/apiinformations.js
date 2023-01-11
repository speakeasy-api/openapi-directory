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
exports.ApiInformationsResponse = exports.ApiInformationsRequest = exports.ApiInformations200ApplicationJson = exports.ApiInformations200ApplicationJsonResultEnum = exports.ApiInformations200ApplicationJsonData = exports.ApiInformations200ApplicationJsonDataEndpoints = exports.ApiInformations200ApplicationJsonActionEnum = exports.ApiInformationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ApiInformationsPathParams = /** @class */ (function (_super) {
    __extends(ApiInformationsPathParams, _super);
    function ApiInformationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=endpointName" }),
        __metadata("design:type", String)
    ], ApiInformationsPathParams.prototype, "endpointName", void 0);
    return ApiInformationsPathParams;
}(utils_1.SpeakeasyBase));
exports.ApiInformationsPathParams = ApiInformationsPathParams;
var ApiInformations200ApplicationJsonActionEnum;
(function (ApiInformations200ApplicationJsonActionEnum) {
    ApiInformations200ApplicationJsonActionEnum["ApiInformations"] = "apiInformations";
})(ApiInformations200ApplicationJsonActionEnum = exports.ApiInformations200ApplicationJsonActionEnum || (exports.ApiInformations200ApplicationJsonActionEnum = {}));
// ApiInformations200ApplicationJsonDataEndpoints
/**
 * Supported path and version for that endpoint
**/
var ApiInformations200ApplicationJsonDataEndpoints = /** @class */ (function (_super) {
    __extends(ApiInformations200ApplicationJsonDataEndpoints, _super);
    function ApiInformations200ApplicationJsonDataEndpoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=httpVerb" }),
        __metadata("design:type", Object)
    ], ApiInformations200ApplicationJsonDataEndpoints.prototype, "httpVerb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", shared.ApiVersion)
    ], ApiInformations200ApplicationJsonDataEndpoints.prototype, "version", void 0);
    return ApiInformations200ApplicationJsonDataEndpoints;
}(utils_1.SpeakeasyBase));
exports.ApiInformations200ApplicationJsonDataEndpoints = ApiInformations200ApplicationJsonDataEndpoints;
var ApiInformations200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ApiInformations200ApplicationJsonData, _super);
    function ApiInformations200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation" }),
        __metadata("design:type", String)
    ], ApiInformations200ApplicationJsonData.prototype, "documentation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointName" }),
        __metadata("design:type", String)
    ], ApiInformations200ApplicationJsonData.prototype, "endpointName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoints", elemType: ApiInformations200ApplicationJsonDataEndpoints }),
        __metadata("design:type", Array)
    ], ApiInformations200ApplicationJsonData.prototype, "endpoints", void 0);
    return ApiInformations200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ApiInformations200ApplicationJsonData = ApiInformations200ApplicationJsonData;
var ApiInformations200ApplicationJsonResultEnum;
(function (ApiInformations200ApplicationJsonResultEnum) {
    ApiInformations200ApplicationJsonResultEnum["Success"] = "success";
    ApiInformations200ApplicationJsonResultEnum["Error"] = "error";
})(ApiInformations200ApplicationJsonResultEnum = exports.ApiInformations200ApplicationJsonResultEnum || (exports.ApiInformations200ApplicationJsonResultEnum = {}));
var ApiInformations200ApplicationJson = /** @class */ (function (_super) {
    __extends(ApiInformations200ApplicationJson, _super);
    function ApiInformations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ApiInformations200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ApiInformations200ApplicationJsonData)
    ], ApiInformations200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ApiInformations200ApplicationJson.prototype, "result", void 0);
    return ApiInformations200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ApiInformations200ApplicationJson = ApiInformations200ApplicationJson;
var ApiInformationsRequest = /** @class */ (function (_super) {
    __extends(ApiInformationsRequest, _super);
    function ApiInformationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApiInformationsPathParams)
    ], ApiInformationsRequest.prototype, "pathParams", void 0);
    return ApiInformationsRequest;
}(utils_1.SpeakeasyBase));
exports.ApiInformationsRequest = ApiInformationsRequest;
var ApiInformationsResponse = /** @class */ (function (_super) {
    __extends(ApiInformationsResponse, _super);
    function ApiInformationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ApiInformationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ApiInformationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApiInformations200ApplicationJson)
    ], ApiInformationsResponse.prototype, "apiInformations200ApplicationJSONObject", void 0);
    return ApiInformationsResponse;
}(utils_1.SpeakeasyBase));
exports.ApiInformationsResponse = ApiInformationsResponse;

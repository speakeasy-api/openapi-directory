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
exports.MonitorKeyUsageResponse = exports.MonitorKeyUsageRequest = exports.MonitorKeyUsageSecurity = exports.MonitorKeyUsageQueryParams = exports.MonitorKeyUsagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MonitorKeyUsagePathParams = /** @class */ (function (_super) {
    __extends(MonitorKeyUsagePathParams, _super);
    function MonitorKeyUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], MonitorKeyUsagePathParams.prototype, "key", void 0);
    return MonitorKeyUsagePathParams;
}(utils_1.SpeakeasyBase));
exports.MonitorKeyUsagePathParams = MonitorKeyUsagePathParams;
var MonitorKeyUsageQueryParams = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageQueryParams, _super);
    function MonitorKeyUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Number)
    ], MonitorKeyUsageQueryParams.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=licensee" }),
        __metadata("design:type", String)
    ], MonitorKeyUsageQueryParams.prototype, "licensee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], MonitorKeyUsageQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], MonitorKeyUsageQueryParams.prototype, "tags", void 0);
    return MonitorKeyUsageQueryParams;
}(utils_1.SpeakeasyBase));
exports.MonitorKeyUsageQueryParams = MonitorKeyUsageQueryParams;
var MonitorKeyUsageSecurity = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageSecurity, _super);
    function MonitorKeyUsageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MonitorKeyUsageSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], MonitorKeyUsageSecurity.prototype, "userToken", void 0);
    return MonitorKeyUsageSecurity;
}(utils_1.SpeakeasyBase));
exports.MonitorKeyUsageSecurity = MonitorKeyUsageSecurity;
var MonitorKeyUsageRequest = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageRequest, _super);
    function MonitorKeyUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MonitorKeyUsagePathParams)
    ], MonitorKeyUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MonitorKeyUsageQueryParams)
    ], MonitorKeyUsageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MonitorKeyUsageSecurity)
    ], MonitorKeyUsageRequest.prototype, "security", void 0);
    return MonitorKeyUsageRequest;
}(utils_1.SpeakeasyBase));
exports.MonitorKeyUsageRequest = MonitorKeyUsageRequest;
var MonitorKeyUsageResponse = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageResponse, _super);
    function MonitorKeyUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MonitorKeyUsageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseSchema)
    ], MonitorKeyUsageResponse.prototype, "errorResponseSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.KeyUsageResponseSchema)
    ], MonitorKeyUsageResponse.prototype, "keyUsageResponseSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MonitorKeyUsageResponse.prototype, "statusCode", void 0);
    return MonitorKeyUsageResponse;
}(utils_1.SpeakeasyBase));
exports.MonitorKeyUsageResponse = MonitorKeyUsageResponse;

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
exports.ReferencesAircraftByAircraftCodeGetResponse = exports.ReferencesAircraftByAircraftCodeGetRequest = exports.ReferencesAircraftByAircraftCodeGetSecurity = exports.ReferencesAircraftByAircraftCodeGetHeaders = exports.ReferencesAircraftByAircraftCodeGetQueryParams = exports.ReferencesAircraftByAircraftCodeGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReferencesAircraftByAircraftCodeGetPathParams = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetPathParams, _super);
    function ReferencesAircraftByAircraftCodeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=aircraftCode" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetPathParams.prototype, "aircraftCode", void 0);
    return ReferencesAircraftByAircraftCodeGetPathParams;
}(utils_1.SpeakeasyBase));
exports.ReferencesAircraftByAircraftCodeGetPathParams = ReferencesAircraftByAircraftCodeGetPathParams;
var ReferencesAircraftByAircraftCodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetQueryParams, _super);
    function ReferencesAircraftByAircraftCodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetQueryParams.prototype, "offset", void 0);
    return ReferencesAircraftByAircraftCodeGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReferencesAircraftByAircraftCodeGetQueryParams = ReferencesAircraftByAircraftCodeGetQueryParams;
var ReferencesAircraftByAircraftCodeGetHeaders = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetHeaders, _super);
    function ReferencesAircraftByAircraftCodeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetHeaders.prototype, "accept", void 0);
    return ReferencesAircraftByAircraftCodeGetHeaders;
}(utils_1.SpeakeasyBase));
exports.ReferencesAircraftByAircraftCodeGetHeaders = ReferencesAircraftByAircraftCodeGetHeaders;
var ReferencesAircraftByAircraftCodeGetSecurity = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetSecurity, _super);
    function ReferencesAircraftByAircraftCodeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], ReferencesAircraftByAircraftCodeGetSecurity.prototype, "auth", void 0);
    return ReferencesAircraftByAircraftCodeGetSecurity;
}(utils_1.SpeakeasyBase));
exports.ReferencesAircraftByAircraftCodeGetSecurity = ReferencesAircraftByAircraftCodeGetSecurity;
var ReferencesAircraftByAircraftCodeGetRequest = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetRequest, _super);
    function ReferencesAircraftByAircraftCodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetPathParams)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetQueryParams)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetHeaders)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetSecurity)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "security", void 0);
    return ReferencesAircraftByAircraftCodeGetRequest;
}(utils_1.SpeakeasyBase));
exports.ReferencesAircraftByAircraftCodeGetRequest = ReferencesAircraftByAircraftCodeGetRequest;
var ReferencesAircraftByAircraftCodeGetResponse = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetResponse, _super);
    function ReferencesAircraftByAircraftCodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReferencesAircraftByAircraftCodeGetResponse.prototype, "referencesAircraftByAircraftCodeGet200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReferencesAircraftByAircraftCodeGetResponse.prototype, "statusCode", void 0);
    return ReferencesAircraftByAircraftCodeGetResponse;
}(utils_1.SpeakeasyBase));
exports.ReferencesAircraftByAircraftCodeGetResponse = ReferencesAircraftByAircraftCodeGetResponse;

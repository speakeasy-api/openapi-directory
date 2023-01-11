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
exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse = exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest = exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity = exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders = exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams = exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=destination" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=fromDateTime" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams.prototype, "fromDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams.prototype, "origin", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams;
}(utils_1.SpeakeasyBase));
exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams = OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams;
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=directFlights" }),
        __metadata("design:type", Boolean)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams.prototype, "directFlights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams.prototype, "offset", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams = OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams;
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders.prototype, "accept", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders;
}(utils_1.SpeakeasyBase));
exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders = OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders;
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity.prototype, "auth", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;
}(utils_1.SpeakeasyBase));
exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity = OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest.prototype, "security", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest;
}(utils_1.SpeakeasyBase));
exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest = OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest;
var OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse = /** @class */ (function (_super) {
    __extends(OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse, _super);
    function OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse.prototype, "operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse.prototype, "statusCode", void 0);
    return OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse;
}(utils_1.SpeakeasyBase));
exports.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse = OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse;

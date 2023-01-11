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
exports.ListShipmentErrorsResponse = exports.ListShipmentErrorsRequest = exports.ListShipmentErrorsQueryParams = exports.ListShipmentErrorsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListShipmentErrorsPathParams = /** @class */ (function (_super) {
    __extends(ListShipmentErrorsPathParams, _super);
    function ListShipmentErrorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=shipment_id" }),
        __metadata("design:type", String)
    ], ListShipmentErrorsPathParams.prototype, "shipmentId", void 0);
    return ListShipmentErrorsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListShipmentErrorsPathParams = ListShipmentErrorsPathParams;
var ListShipmentErrorsQueryParams = /** @class */ (function (_super) {
    __extends(ListShipmentErrorsQueryParams, _super);
    function ListShipmentErrorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListShipmentErrorsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], ListShipmentErrorsQueryParams.prototype, "pagesize", void 0);
    return ListShipmentErrorsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListShipmentErrorsQueryParams = ListShipmentErrorsQueryParams;
var ListShipmentErrorsRequest = /** @class */ (function (_super) {
    __extends(ListShipmentErrorsRequest, _super);
    function ListShipmentErrorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListShipmentErrorsPathParams)
    ], ListShipmentErrorsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListShipmentErrorsQueryParams)
    ], ListShipmentErrorsRequest.prototype, "queryParams", void 0);
    return ListShipmentErrorsRequest;
}(utils_1.SpeakeasyBase));
exports.ListShipmentErrorsRequest = ListShipmentErrorsRequest;
var ListShipmentErrorsResponse = /** @class */ (function (_super) {
    __extends(ListShipmentErrorsResponse, _super);
    function ListShipmentErrorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListShipmentErrorsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListShipmentErrorsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseBody)
    ], ListShipmentErrorsResponse.prototype, "errorResponseBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListShipmentErrorsResponseBody)
    ], ListShipmentErrorsResponse.prototype, "listShipmentErrorsResponseBody", void 0);
    return ListShipmentErrorsResponse;
}(utils_1.SpeakeasyBase));
exports.ListShipmentErrorsResponse = ListShipmentErrorsResponse;

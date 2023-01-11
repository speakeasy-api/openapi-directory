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
exports.PeopleGeoPeopleGeoGetResponse = exports.PeopleGeoPeopleGeoGetRequest = exports.PeopleGeoPeopleGeoGetHeaders = exports.PeopleGeoPeopleGeoGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PeopleGeoPeopleGeoGetQueryParams = /** @class */ (function (_super) {
    __extends(PeopleGeoPeopleGeoGetQueryParams, _super);
    function PeopleGeoPeopleGeoGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=apikey" }),
        __metadata("design:type", String)
    ], PeopleGeoPeopleGeoGetQueryParams.prototype, "apikey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], PeopleGeoPeopleGeoGetQueryParams.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], PeopleGeoPeopleGeoGetQueryParams.prototype, "lat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lng" }),
        __metadata("design:type", Number)
    ], PeopleGeoPeopleGeoGetQueryParams.prototype, "lng", void 0);
    return PeopleGeoPeopleGeoGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.PeopleGeoPeopleGeoGetQueryParams = PeopleGeoPeopleGeoGetQueryParams;
var PeopleGeoPeopleGeoGetHeaders = /** @class */ (function (_super) {
    __extends(PeopleGeoPeopleGeoGetHeaders, _super);
    function PeopleGeoPeopleGeoGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], PeopleGeoPeopleGeoGetHeaders.prototype, "xApiKey", void 0);
    return PeopleGeoPeopleGeoGetHeaders;
}(utils_1.SpeakeasyBase));
exports.PeopleGeoPeopleGeoGetHeaders = PeopleGeoPeopleGeoGetHeaders;
var PeopleGeoPeopleGeoGetRequest = /** @class */ (function (_super) {
    __extends(PeopleGeoPeopleGeoGetRequest, _super);
    function PeopleGeoPeopleGeoGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeopleGeoPeopleGeoGetQueryParams)
    ], PeopleGeoPeopleGeoGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PeopleGeoPeopleGeoGetHeaders)
    ], PeopleGeoPeopleGeoGetRequest.prototype, "headers", void 0);
    return PeopleGeoPeopleGeoGetRequest;
}(utils_1.SpeakeasyBase));
exports.PeopleGeoPeopleGeoGetRequest = PeopleGeoPeopleGeoGetRequest;
var PeopleGeoPeopleGeoGetResponse = /** @class */ (function (_super) {
    __extends(PeopleGeoPeopleGeoGetResponse, _super);
    function PeopleGeoPeopleGeoGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PeopleGeoPeopleGeoGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HttpValidationError)
    ], PeopleGeoPeopleGeoGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PersonList)
    ], PeopleGeoPeopleGeoGetResponse.prototype, "personList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PeopleGeoPeopleGeoGetResponse.prototype, "statusCode", void 0);
    return PeopleGeoPeopleGeoGetResponse;
}(utils_1.SpeakeasyBase));
exports.PeopleGeoPeopleGeoGetResponse = PeopleGeoPeopleGeoGetResponse;

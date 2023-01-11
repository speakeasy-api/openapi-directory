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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGenesByAffyIdUsingGetResponse = exports.GetGenesByAffyIdUsingGetRequest = exports.GetGenesByAffyIdUsingGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetGenesByAffyIdUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetGenesByAffyIdUsingGetPathParams, _super);
    function GetGenesByAffyIdUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=affyId" }),
        __metadata("design:type", String)
    ], GetGenesByAffyIdUsingGetPathParams.prototype, "affyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" }),
        __metadata("design:type", Number)
    ], GetGenesByAffyIdUsingGetPathParams.prototype, "speciesTypeKey", void 0);
    return GetGenesByAffyIdUsingGetPathParams;
}(utils_1.SpeakeasyBase));
exports.GetGenesByAffyIdUsingGetPathParams = GetGenesByAffyIdUsingGetPathParams;
var GetGenesByAffyIdUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetGenesByAffyIdUsingGetRequest, _super);
    function GetGenesByAffyIdUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGenesByAffyIdUsingGetPathParams)
    ], GetGenesByAffyIdUsingGetRequest.prototype, "pathParams", void 0);
    return GetGenesByAffyIdUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.GetGenesByAffyIdUsingGetRequest = GetGenesByAffyIdUsingGetRequest;
var GetGenesByAffyIdUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetGenesByAffyIdUsingGetResponse, _super);
    function GetGenesByAffyIdUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGenesByAffyIdUsingGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGenesByAffyIdUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGenesByAffyIdUsingGetResponse.prototype, "statusCode", void 0);
    return GetGenesByAffyIdUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.GetGenesByAffyIdUsingGetResponse = GetGenesByAffyIdUsingGetResponse;

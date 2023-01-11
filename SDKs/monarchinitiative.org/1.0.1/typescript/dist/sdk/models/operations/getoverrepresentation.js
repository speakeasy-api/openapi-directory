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
exports.GetOverRepresentationResponse = exports.GetOverRepresentationRequest = exports.GetOverRepresentationQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOverRepresentationQueryParams = /** @class */ (function (_super) {
    __extends(GetOverRepresentationQueryParams, _super);
    function GetOverRepresentationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=background" }),
        __metadata("design:type", Array)
    ], GetOverRepresentationQueryParams.prototype, "background", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_p_value" }),
        __metadata("design:type", String)
    ], GetOverRepresentationQueryParams.prototype, "maxPValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=object_category" }),
        __metadata("design:type", String)
    ], GetOverRepresentationQueryParams.prototype, "objectCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ontology" }),
        __metadata("design:type", String)
    ], GetOverRepresentationQueryParams.prototype, "ontology", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subject" }),
        __metadata("design:type", Array)
    ], GetOverRepresentationQueryParams.prototype, "subject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subject_category" }),
        __metadata("design:type", String)
    ], GetOverRepresentationQueryParams.prototype, "subjectCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=taxon" }),
        __metadata("design:type", String)
    ], GetOverRepresentationQueryParams.prototype, "taxon", void 0);
    return GetOverRepresentationQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOverRepresentationQueryParams = GetOverRepresentationQueryParams;
var GetOverRepresentationRequest = /** @class */ (function (_super) {
    __extends(GetOverRepresentationRequest, _super);
    function GetOverRepresentationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOverRepresentationQueryParams)
    ], GetOverRepresentationRequest.prototype, "queryParams", void 0);
    return GetOverRepresentationRequest;
}(utils_1.SpeakeasyBase));
exports.GetOverRepresentationRequest = GetOverRepresentationRequest;
var GetOverRepresentationResponse = /** @class */ (function (_super) {
    __extends(GetOverRepresentationResponse, _super);
    function GetOverRepresentationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOverRepresentationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOverRepresentationResponse.prototype, "statusCode", void 0);
    return GetOverRepresentationResponse;
}(utils_1.SpeakeasyBase));
exports.GetOverRepresentationResponse = GetOverRepresentationResponse;

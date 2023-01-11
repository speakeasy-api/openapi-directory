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
exports.GetEntitySetFunctionSlimmerResponse = exports.GetEntitySetFunctionSlimmerRequest = exports.GetEntitySetFunctionSlimmerQueryParams = exports.GetEntitySetFunctionSlimmerRelationshipTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetEntitySetFunctionSlimmerRelationshipTypeEnum;
(function (GetEntitySetFunctionSlimmerRelationshipTypeEnum) {
    GetEntitySetFunctionSlimmerRelationshipTypeEnum["InvolvedIn"] = "involved_in";
    GetEntitySetFunctionSlimmerRelationshipTypeEnum["ActsUpstreamOfOrWithin"] = "acts_upstream_of_or_within";
})(GetEntitySetFunctionSlimmerRelationshipTypeEnum = exports.GetEntitySetFunctionSlimmerRelationshipTypeEnum || (exports.GetEntitySetFunctionSlimmerRelationshipTypeEnum = {}));
var GetEntitySetFunctionSlimmerQueryParams = /** @class */ (function (_super) {
    __extends(GetEntitySetFunctionSlimmerQueryParams, _super);
    function GetEntitySetFunctionSlimmerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" }),
        __metadata("design:type", Boolean)
    ], GetEntitySetFunctionSlimmerQueryParams.prototype, "excludeAutomaticAssertions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=relationship_type" }),
        __metadata("design:type", String)
    ], GetEntitySetFunctionSlimmerQueryParams.prototype, "relationshipType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rows" }),
        __metadata("design:type", Number)
    ], GetEntitySetFunctionSlimmerQueryParams.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=slim" }),
        __metadata("design:type", Array)
    ], GetEntitySetFunctionSlimmerQueryParams.prototype, "slim", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetEntitySetFunctionSlimmerQueryParams.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=subject" }),
        __metadata("design:type", Array)
    ], GetEntitySetFunctionSlimmerQueryParams.prototype, "subject", void 0);
    return GetEntitySetFunctionSlimmerQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetFunctionSlimmerQueryParams = GetEntitySetFunctionSlimmerQueryParams;
var GetEntitySetFunctionSlimmerRequest = /** @class */ (function (_super) {
    __extends(GetEntitySetFunctionSlimmerRequest, _super);
    function GetEntitySetFunctionSlimmerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEntitySetFunctionSlimmerQueryParams)
    ], GetEntitySetFunctionSlimmerRequest.prototype, "queryParams", void 0);
    return GetEntitySetFunctionSlimmerRequest;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetFunctionSlimmerRequest = GetEntitySetFunctionSlimmerRequest;
var GetEntitySetFunctionSlimmerResponse = /** @class */ (function (_super) {
    __extends(GetEntitySetFunctionSlimmerResponse, _super);
    function GetEntitySetFunctionSlimmerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEntitySetFunctionSlimmerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEntitySetFunctionSlimmerResponse.prototype, "statusCode", void 0);
    return GetEntitySetFunctionSlimmerResponse;
}(utils_1.SpeakeasyBase));
exports.GetEntitySetFunctionSlimmerResponse = GetEntitySetFunctionSlimmerResponse;

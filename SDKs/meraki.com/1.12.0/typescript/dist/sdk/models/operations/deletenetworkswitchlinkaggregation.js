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
exports.DeleteNetworkSwitchLinkAggregationResponse = exports.DeleteNetworkSwitchLinkAggregationRequest = exports.DeleteNetworkSwitchLinkAggregationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteNetworkSwitchLinkAggregationPathParams = /** @class */ (function (_super) {
    __extends(DeleteNetworkSwitchLinkAggregationPathParams, _super);
    function DeleteNetworkSwitchLinkAggregationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=linkAggregationId" }),
        __metadata("design:type", String)
    ], DeleteNetworkSwitchLinkAggregationPathParams.prototype, "linkAggregationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], DeleteNetworkSwitchLinkAggregationPathParams.prototype, "networkId", void 0);
    return DeleteNetworkSwitchLinkAggregationPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteNetworkSwitchLinkAggregationPathParams = DeleteNetworkSwitchLinkAggregationPathParams;
var DeleteNetworkSwitchLinkAggregationRequest = /** @class */ (function (_super) {
    __extends(DeleteNetworkSwitchLinkAggregationRequest, _super);
    function DeleteNetworkSwitchLinkAggregationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteNetworkSwitchLinkAggregationPathParams)
    ], DeleteNetworkSwitchLinkAggregationRequest.prototype, "pathParams", void 0);
    return DeleteNetworkSwitchLinkAggregationRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteNetworkSwitchLinkAggregationRequest = DeleteNetworkSwitchLinkAggregationRequest;
var DeleteNetworkSwitchLinkAggregationResponse = /** @class */ (function (_super) {
    __extends(DeleteNetworkSwitchLinkAggregationResponse, _super);
    function DeleteNetworkSwitchLinkAggregationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteNetworkSwitchLinkAggregationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteNetworkSwitchLinkAggregationResponse.prototype, "statusCode", void 0);
    return DeleteNetworkSwitchLinkAggregationResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteNetworkSwitchLinkAggregationResponse = DeleteNetworkSwitchLinkAggregationResponse;

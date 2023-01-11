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
exports.NodesCitationListResponse = exports.NodesCitationListRequest = exports.NodesCitationListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var NodesCitationListPathParams = /** @class */ (function (_super) {
    __extends(NodesCitationListPathParams, _super);
    function NodesCitationListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesCitationListPathParams.prototype, "nodeId", void 0);
    return NodesCitationListPathParams;
}(utils_1.SpeakeasyBase));
exports.NodesCitationListPathParams = NodesCitationListPathParams;
var NodesCitationListRequest = /** @class */ (function (_super) {
    __extends(NodesCitationListRequest, _super);
    function NodesCitationListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NodesCitationListPathParams)
    ], NodesCitationListRequest.prototype, "pathParams", void 0);
    return NodesCitationListRequest;
}(utils_1.SpeakeasyBase));
exports.NodesCitationListRequest = NodesCitationListRequest;
var NodesCitationListResponse = /** @class */ (function (_super) {
    __extends(NodesCitationListResponse, _super);
    function NodesCitationListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], NodesCitationListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NodesCitationListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NodesCitationListResponse.prototype, "statusCode", void 0);
    return NodesCitationListResponse;
}(utils_1.SpeakeasyBase));
exports.NodesCitationListResponse = NodesCitationListResponse;

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
exports.NodesFilesReadResponse = exports.NodesFilesReadRequest = exports.NodesFilesReadPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var NodesFilesReadPathParams = /** @class */ (function (_super) {
    __extends(NodesFilesReadPathParams, _super);
    function NodesFilesReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesFilesReadPathParams.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], NodesFilesReadPathParams.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], NodesFilesReadPathParams.prototype, "provider", void 0);
    return NodesFilesReadPathParams;
}(utils_1.SpeakeasyBase));
exports.NodesFilesReadPathParams = NodesFilesReadPathParams;
var NodesFilesReadRequest = /** @class */ (function (_super) {
    __extends(NodesFilesReadRequest, _super);
    function NodesFilesReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NodesFilesReadPathParams)
    ], NodesFilesReadRequest.prototype, "pathParams", void 0);
    return NodesFilesReadRequest;
}(utils_1.SpeakeasyBase));
exports.NodesFilesReadRequest = NodesFilesReadRequest;
var NodesFilesReadResponse = /** @class */ (function (_super) {
    __extends(NodesFilesReadResponse, _super);
    function NodesFilesReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], NodesFilesReadResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NodesFilesReadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NodesFilesReadResponse.prototype, "statusCode", void 0);
    return NodesFilesReadResponse;
}(utils_1.SpeakeasyBase));
exports.NodesFilesReadResponse = NodesFilesReadResponse;

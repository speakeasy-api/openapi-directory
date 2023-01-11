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
exports.DeletePensionRevisionByNumberResponse = exports.DeletePensionRevisionByNumberRequest = exports.DeletePensionRevisionByNumberHeaders = exports.DeletePensionRevisionByNumberPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeletePensionRevisionByNumberPathParams = /** @class */ (function (_super) {
    __extends(DeletePensionRevisionByNumberPathParams, _super);
    function DeletePensionRevisionByNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], DeletePensionRevisionByNumberPathParams.prototype, "employerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=PensionId" }),
        __metadata("design:type", String)
    ], DeletePensionRevisionByNumberPathParams.prototype, "pensionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" }),
        __metadata("design:type", String)
    ], DeletePensionRevisionByNumberPathParams.prototype, "revisionNumber", void 0);
    return DeletePensionRevisionByNumberPathParams;
}(utils_1.SpeakeasyBase));
exports.DeletePensionRevisionByNumberPathParams = DeletePensionRevisionByNumberPathParams;
var DeletePensionRevisionByNumberHeaders = /** @class */ (function (_super) {
    __extends(DeletePensionRevisionByNumberHeaders, _super);
    function DeletePensionRevisionByNumberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], DeletePensionRevisionByNumberHeaders.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], DeletePensionRevisionByNumberHeaders.prototype, "authorization", void 0);
    return DeletePensionRevisionByNumberHeaders;
}(utils_1.SpeakeasyBase));
exports.DeletePensionRevisionByNumberHeaders = DeletePensionRevisionByNumberHeaders;
var DeletePensionRevisionByNumberRequest = /** @class */ (function (_super) {
    __extends(DeletePensionRevisionByNumberRequest, _super);
    function DeletePensionRevisionByNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePensionRevisionByNumberPathParams)
    ], DeletePensionRevisionByNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePensionRevisionByNumberHeaders)
    ], DeletePensionRevisionByNumberRequest.prototype, "headers", void 0);
    return DeletePensionRevisionByNumberRequest;
}(utils_1.SpeakeasyBase));
exports.DeletePensionRevisionByNumberRequest = DeletePensionRevisionByNumberRequest;
var DeletePensionRevisionByNumberResponse = /** @class */ (function (_super) {
    __extends(DeletePensionRevisionByNumberResponse, _super);
    function DeletePensionRevisionByNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeletePensionRevisionByNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorModel)
    ], DeletePensionRevisionByNumberResponse.prototype, "errorModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeletePensionRevisionByNumberResponse.prototype, "statusCode", void 0);
    return DeletePensionRevisionByNumberResponse;
}(utils_1.SpeakeasyBase));
exports.DeletePensionRevisionByNumberResponse = DeletePensionRevisionByNumberResponse;

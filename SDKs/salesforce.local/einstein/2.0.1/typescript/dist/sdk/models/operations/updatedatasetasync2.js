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
exports.UpdateDatasetAsync2Response = exports.UpdateDatasetAsync2Request = exports.UpdateDatasetAsync2Security = exports.UpdateDatasetAsync2RequestBody = exports.UpdateDatasetAsync2PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateDatasetAsync2PathParams = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync2PathParams, _super);
    function UpdateDatasetAsync2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsync2PathParams.prototype, "datasetId", void 0);
    return UpdateDatasetAsync2PathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync2PathParams = UpdateDatasetAsync2PathParams;
var UpdateDatasetAsync2RequestBody = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync2RequestBody, _super);
    function UpdateDatasetAsync2RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsync2RequestBody.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsync2RequestBody.prototype, "path", void 0);
    return UpdateDatasetAsync2RequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync2RequestBody = UpdateDatasetAsync2RequestBody;
var UpdateDatasetAsync2Security = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync2Security, _super);
    function UpdateDatasetAsync2Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], UpdateDatasetAsync2Security.prototype, "bearerToken", void 0);
    return UpdateDatasetAsync2Security;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync2Security = UpdateDatasetAsync2Security;
var UpdateDatasetAsync2Request = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync2Request, _super);
    function UpdateDatasetAsync2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDatasetAsync2PathParams)
    ], UpdateDatasetAsync2Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateDatasetAsync2RequestBody)
    ], UpdateDatasetAsync2Request.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDatasetAsync2Security)
    ], UpdateDatasetAsync2Request.prototype, "security", void 0);
    return UpdateDatasetAsync2Request;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync2Request = UpdateDatasetAsync2Request;
var UpdateDatasetAsync2Response = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync2Response, _super);
    function UpdateDatasetAsync2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDatasetAsync2Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Dataset)
    ], UpdateDatasetAsync2Response.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDatasetAsync2Response.prototype, "statusCode", void 0);
    return UpdateDatasetAsync2Response;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync2Response = UpdateDatasetAsync2Response;

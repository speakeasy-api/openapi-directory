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
exports.LifesciencesProjectsLocationsPipelinesRunResponse = exports.LifesciencesProjectsLocationsPipelinesRunRequest = exports.LifesciencesProjectsLocationsPipelinesRunSecurity = exports.LifesciencesProjectsLocationsPipelinesRunQueryParams = exports.LifesciencesProjectsLocationsPipelinesRunPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LifesciencesProjectsLocationsPipelinesRunPathParams = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsPipelinesRunPathParams, _super);
    function LifesciencesProjectsLocationsPipelinesRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunPathParams.prototype, "parent", void 0);
    return LifesciencesProjectsLocationsPipelinesRunPathParams;
}(utils_1.SpeakeasyBase));
exports.LifesciencesProjectsLocationsPipelinesRunPathParams = LifesciencesProjectsLocationsPipelinesRunPathParams;
var LifesciencesProjectsLocationsPipelinesRunQueryParams = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsPipelinesRunQueryParams, _super);
    function LifesciencesProjectsLocationsPipelinesRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunQueryParams.prototype, "uploadProtocol", void 0);
    return LifesciencesProjectsLocationsPipelinesRunQueryParams;
}(utils_1.SpeakeasyBase));
exports.LifesciencesProjectsLocationsPipelinesRunQueryParams = LifesciencesProjectsLocationsPipelinesRunQueryParams;
var LifesciencesProjectsLocationsPipelinesRunSecurity = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsPipelinesRunSecurity, _super);
    function LifesciencesProjectsLocationsPipelinesRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LifesciencesProjectsLocationsPipelinesRunSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LifesciencesProjectsLocationsPipelinesRunSecurity.prototype, "oauth2c", void 0);
    return LifesciencesProjectsLocationsPipelinesRunSecurity;
}(utils_1.SpeakeasyBase));
exports.LifesciencesProjectsLocationsPipelinesRunSecurity = LifesciencesProjectsLocationsPipelinesRunSecurity;
var LifesciencesProjectsLocationsPipelinesRunRequest = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsPipelinesRunRequest, _super);
    function LifesciencesProjectsLocationsPipelinesRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LifesciencesProjectsLocationsPipelinesRunPathParams)
    ], LifesciencesProjectsLocationsPipelinesRunRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LifesciencesProjectsLocationsPipelinesRunQueryParams)
    ], LifesciencesProjectsLocationsPipelinesRunRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunPipelineRequest)
    ], LifesciencesProjectsLocationsPipelinesRunRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LifesciencesProjectsLocationsPipelinesRunSecurity)
    ], LifesciencesProjectsLocationsPipelinesRunRequest.prototype, "security", void 0);
    return LifesciencesProjectsLocationsPipelinesRunRequest;
}(utils_1.SpeakeasyBase));
exports.LifesciencesProjectsLocationsPipelinesRunRequest = LifesciencesProjectsLocationsPipelinesRunRequest;
var LifesciencesProjectsLocationsPipelinesRunResponse = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsPipelinesRunResponse, _super);
    function LifesciencesProjectsLocationsPipelinesRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsPipelinesRunResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Operation)
    ], LifesciencesProjectsLocationsPipelinesRunResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LifesciencesProjectsLocationsPipelinesRunResponse.prototype, "statusCode", void 0);
    return LifesciencesProjectsLocationsPipelinesRunResponse;
}(utils_1.SpeakeasyBase));
exports.LifesciencesProjectsLocationsPipelinesRunResponse = LifesciencesProjectsLocationsPipelinesRunResponse;

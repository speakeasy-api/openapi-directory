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
exports.LaunchProjectResponse = exports.LaunchProjectRequest = exports.LaunchProjectRequestBody = exports.LaunchProjectRequestBodyPaymentMethodEnum = exports.LaunchProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LaunchProjectPathParams = /** @class */ (function (_super) {
    __extends(LaunchProjectPathParams, _super);
    function LaunchProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], LaunchProjectPathParams.prototype, "id", void 0);
    return LaunchProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.LaunchProjectPathParams = LaunchProjectPathParams;
var LaunchProjectRequestBodyPaymentMethodEnum;
(function (LaunchProjectRequestBodyPaymentMethodEnum) {
    LaunchProjectRequestBodyPaymentMethodEnum["Corporate"] = "corporate";
    LaunchProjectRequestBodyPaymentMethodEnum["Client"] = "client";
    LaunchProjectRequestBodyPaymentMethodEnum["App"] = "app";
    LaunchProjectRequestBodyPaymentMethodEnum["Credit"] = "credit";
    LaunchProjectRequestBodyPaymentMethodEnum["CorporateCard"] = "corporate_card";
})(LaunchProjectRequestBodyPaymentMethodEnum = exports.LaunchProjectRequestBodyPaymentMethodEnum || (exports.LaunchProjectRequestBodyPaymentMethodEnum = {}));
var LaunchProjectRequestBody = /** @class */ (function (_super) {
    __extends(LaunchProjectRequestBody, _super);
    function LaunchProjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=bin" }),
        __metadata("design:type", String)
    ], LaunchProjectRequestBody.prototype, "bin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=budget_code" }),
        __metadata("design:type", String)
    ], LaunchProjectRequestBody.prototype, "budgetCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=card_id" }),
        __metadata("design:type", Number)
    ], LaunchProjectRequestBody.prototype, "cardId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=payment_code" }),
        __metadata("design:type", String)
    ], LaunchProjectRequestBody.prototype, "paymentCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=payment_method" }),
        __metadata("design:type", String)
    ], LaunchProjectRequestBody.prototype, "paymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=stripe_token" }),
        __metadata("design:type", String)
    ], LaunchProjectRequestBody.prototype, "stripeToken", void 0);
    return LaunchProjectRequestBody;
}(utils_1.SpeakeasyBase));
exports.LaunchProjectRequestBody = LaunchProjectRequestBody;
var LaunchProjectRequest = /** @class */ (function (_super) {
    __extends(LaunchProjectRequest, _super);
    function LaunchProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LaunchProjectPathParams)
    ], LaunchProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", LaunchProjectRequestBody)
    ], LaunchProjectRequest.prototype, "request", void 0);
    return LaunchProjectRequest;
}(utils_1.SpeakeasyBase));
exports.LaunchProjectRequest = LaunchProjectRequest;
var LaunchProjectResponse = /** @class */ (function (_super) {
    __extends(LaunchProjectResponse, _super);
    function LaunchProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LaunchProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], LaunchProjectResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProjectLaunchResponse)
    ], LaunchProjectResponse.prototype, "projectLaunchResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LaunchProjectResponse.prototype, "statusCode", void 0);
    return LaunchProjectResponse;
}(utils_1.SpeakeasyBase));
exports.LaunchProjectResponse = LaunchProjectResponse;

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
exports.GetPaymentsForPayoutPaV3Response = exports.GetPaymentsForPayoutPaV3Request = exports.GetPaymentsForPayoutPaV3QueryParams = exports.GetPaymentsForPayoutPaV3StatusEnum = exports.GetPaymentsForPayoutPaV3PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPaymentsForPayoutPaV3PathParams = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutPaV3PathParams, _super);
    function GetPaymentsForPayoutPaV3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payoutId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutPaV3PathParams.prototype, "payoutId", void 0);
    return GetPaymentsForPayoutPaV3PathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutPaV3PathParams = GetPaymentsForPayoutPaV3PathParams;
var GetPaymentsForPayoutPaV3StatusEnum;
(function (GetPaymentsForPayoutPaV3StatusEnum) {
    GetPaymentsForPayoutPaV3StatusEnum["Accepted"] = "ACCEPTED";
    GetPaymentsForPayoutPaV3StatusEnum["AwaitingFunds"] = "AWAITING_FUNDS";
    GetPaymentsForPayoutPaV3StatusEnum["Funded"] = "FUNDED";
    GetPaymentsForPayoutPaV3StatusEnum["Unfunded"] = "UNFUNDED";
    GetPaymentsForPayoutPaV3StatusEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    GetPaymentsForPayoutPaV3StatusEnum["Rejected"] = "REJECTED";
    GetPaymentsForPayoutPaV3StatusEnum["AcceptedByRails"] = "ACCEPTED_BY_RAILS";
    GetPaymentsForPayoutPaV3StatusEnum["Confirmed"] = "CONFIRMED";
    GetPaymentsForPayoutPaV3StatusEnum["Failed"] = "FAILED";
    GetPaymentsForPayoutPaV3StatusEnum["Returned"] = "RETURNED";
    GetPaymentsForPayoutPaV3StatusEnum["Withdrawn"] = "WITHDRAWN";
})(GetPaymentsForPayoutPaV3StatusEnum = exports.GetPaymentsForPayoutPaV3StatusEnum || (exports.GetPaymentsForPayoutPaV3StatusEnum = {}));
var GetPaymentsForPayoutPaV3QueryParams = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutPaV3QueryParams, _super);
    function GetPaymentsForPayoutPaV3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "paymentAmountFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "paymentAmountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=remoteId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "remoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "sensitive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "sourceAmountFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "sourceAmountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" }),
        __metadata("design:type", Date)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "submittedDateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=submittedDateTo" }),
        __metadata("design:type", Date)
    ], GetPaymentsForPayoutPaV3QueryParams.prototype, "submittedDateTo", void 0);
    return GetPaymentsForPayoutPaV3QueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutPaV3QueryParams = GetPaymentsForPayoutPaV3QueryParams;
var GetPaymentsForPayoutPaV3Request = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutPaV3Request, _super);
    function GetPaymentsForPayoutPaV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentsForPayoutPaV3PathParams)
    ], GetPaymentsForPayoutPaV3Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentsForPayoutPaV3QueryParams)
    ], GetPaymentsForPayoutPaV3Request.prototype, "queryParams", void 0);
    return GetPaymentsForPayoutPaV3Request;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutPaV3Request = GetPaymentsForPayoutPaV3Request;
var GetPaymentsForPayoutPaV3Response = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutPaV3Response, _super);
    function GetPaymentsForPayoutPaV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutPaV3Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetPaymentsForPayoutResponseV3)
    ], GetPaymentsForPayoutPaV3Response.prototype, "getPaymentsForPayoutResponseV3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutPaV3Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutPaV3Response.prototype, "inlineResponse400", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutPaV3Response.prototype, "inlineResponse401", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutPaV3Response.prototype, "inlineResponse403", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutPaV3Response.prototype, "inlineResponse404", void 0);
    return GetPaymentsForPayoutPaV3Response;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutPaV3Response = GetPaymentsForPayoutPaV3Response;

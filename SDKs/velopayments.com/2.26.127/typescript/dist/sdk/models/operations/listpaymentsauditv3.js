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
exports.ListPaymentsAuditV3Response = exports.ListPaymentsAuditV3Request = exports.ListPaymentsAuditV3QueryParams = exports.ListPaymentsAuditV3StatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPaymentsAuditV3StatusEnum;
(function (ListPaymentsAuditV3StatusEnum) {
    ListPaymentsAuditV3StatusEnum["Accepted"] = "ACCEPTED";
    ListPaymentsAuditV3StatusEnum["AwaitingFunds"] = "AWAITING_FUNDS";
    ListPaymentsAuditV3StatusEnum["Funded"] = "FUNDED";
    ListPaymentsAuditV3StatusEnum["Unfunded"] = "UNFUNDED";
    ListPaymentsAuditV3StatusEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    ListPaymentsAuditV3StatusEnum["Rejected"] = "REJECTED";
    ListPaymentsAuditV3StatusEnum["AcceptedByRails"] = "ACCEPTED_BY_RAILS";
    ListPaymentsAuditV3StatusEnum["Confirmed"] = "CONFIRMED";
    ListPaymentsAuditV3StatusEnum["Failed"] = "FAILED";
    ListPaymentsAuditV3StatusEnum["Returned"] = "RETURNED";
    ListPaymentsAuditV3StatusEnum["Withdrawn"] = "WITHDRAWN";
})(ListPaymentsAuditV3StatusEnum = exports.ListPaymentsAuditV3StatusEnum || (exports.ListPaymentsAuditV3StatusEnum = {}));
var ListPaymentsAuditV3QueryParams = /** @class */ (function (_super) {
    __extends(ListPaymentsAuditV3QueryParams, _super);
    function ListPaymentsAuditV3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV3QueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV3QueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=payeeId" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "payeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV3QueryParams.prototype, "paymentAmountFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV3QueryParams.prototype, "paymentAmountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentCurrency" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "paymentCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentMemo" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "paymentMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=payorId" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "payorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=payorName" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "payorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=remoteId" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "remoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], ListPaymentsAuditV3QueryParams.prototype, "sensitive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceAccountName" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "sourceAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV3QueryParams.prototype, "sourceAmountFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" }),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV3QueryParams.prototype, "sourceAmountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceCurrency" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "sourceCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3QueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" }),
        __metadata("design:type", Date)
    ], ListPaymentsAuditV3QueryParams.prototype, "submittedDateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=submittedDateTo" }),
        __metadata("design:type", Date)
    ], ListPaymentsAuditV3QueryParams.prototype, "submittedDateTo", void 0);
    return ListPaymentsAuditV3QueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPaymentsAuditV3QueryParams = ListPaymentsAuditV3QueryParams;
var ListPaymentsAuditV3Request = /** @class */ (function (_super) {
    __extends(ListPaymentsAuditV3Request, _super);
    function ListPaymentsAuditV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPaymentsAuditV3QueryParams)
    ], ListPaymentsAuditV3Request.prototype, "queryParams", void 0);
    return ListPaymentsAuditV3Request;
}(utils_1.SpeakeasyBase));
exports.ListPaymentsAuditV3Request = ListPaymentsAuditV3Request;
var ListPaymentsAuditV3Response = /** @class */ (function (_super) {
    __extends(ListPaymentsAuditV3Response, _super);
    function ListPaymentsAuditV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPaymentsAuditV3Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListPaymentsResponseV3)
    ], ListPaymentsAuditV3Response.prototype, "listPaymentsResponseV3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPaymentsAuditV3Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListPaymentsAuditV3Response.prototype, "inlineResponse400", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListPaymentsAuditV3Response.prototype, "inlineResponse401", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListPaymentsAuditV3Response.prototype, "inlineResponse403", void 0);
    return ListPaymentsAuditV3Response;
}(utils_1.SpeakeasyBase));
exports.ListPaymentsAuditV3Response = ListPaymentsAuditV3Response;

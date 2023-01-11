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
exports.GetPaymentsForPayoutV4Response = exports.GetPaymentsForPayoutV4Request = exports.GetPaymentsForPayoutV4QueryParams = exports.GetPaymentsForPayoutV4TransmissionTypeEnum = exports.GetPaymentsForPayoutV4StatusEnum = exports.GetPaymentsForPayoutV4PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPaymentsForPayoutV4PathParams = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV4PathParams, _super);
    function GetPaymentsForPayoutV4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payoutId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV4PathParams.prototype, "payoutId", void 0);
    return GetPaymentsForPayoutV4PathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutV4PathParams = GetPaymentsForPayoutV4PathParams;
var GetPaymentsForPayoutV4StatusEnum;
(function (GetPaymentsForPayoutV4StatusEnum) {
    GetPaymentsForPayoutV4StatusEnum["Accepted"] = "ACCEPTED";
    GetPaymentsForPayoutV4StatusEnum["AwaitingFunds"] = "AWAITING_FUNDS";
    GetPaymentsForPayoutV4StatusEnum["Funded"] = "FUNDED";
    GetPaymentsForPayoutV4StatusEnum["Unfunded"] = "UNFUNDED";
    GetPaymentsForPayoutV4StatusEnum["BankPaymentRequested"] = "BANK_PAYMENT_REQUESTED";
    GetPaymentsForPayoutV4StatusEnum["Rejected"] = "REJECTED";
    GetPaymentsForPayoutV4StatusEnum["AcceptedByRails"] = "ACCEPTED_BY_RAILS";
    GetPaymentsForPayoutV4StatusEnum["Confirmed"] = "CONFIRMED";
    GetPaymentsForPayoutV4StatusEnum["Failed"] = "FAILED";
    GetPaymentsForPayoutV4StatusEnum["Returned"] = "RETURNED";
    GetPaymentsForPayoutV4StatusEnum["Withdrawn"] = "WITHDRAWN";
})(GetPaymentsForPayoutV4StatusEnum = exports.GetPaymentsForPayoutV4StatusEnum || (exports.GetPaymentsForPayoutV4StatusEnum = {}));
var GetPaymentsForPayoutV4TransmissionTypeEnum;
(function (GetPaymentsForPayoutV4TransmissionTypeEnum) {
    GetPaymentsForPayoutV4TransmissionTypeEnum["Ach"] = "ACH";
    GetPaymentsForPayoutV4TransmissionTypeEnum["SameDayAch"] = "SAME_DAY_ACH";
    GetPaymentsForPayoutV4TransmissionTypeEnum["Wire"] = "WIRE";
})(GetPaymentsForPayoutV4TransmissionTypeEnum = exports.GetPaymentsForPayoutV4TransmissionTypeEnum || (exports.GetPaymentsForPayoutV4TransmissionTypeEnum = {}));
var GetPaymentsForPayoutV4QueryParams = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV4QueryParams, _super);
    function GetPaymentsForPayoutV4QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentAmountFrom" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "paymentAmountFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=paymentAmountTo" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "paymentAmountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=remoteId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "remoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=remoteSystemId" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "remoteSystemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "sensitive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceAmountFrom" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "sourceAmountFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceAmountTo" }),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "sourceAmountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=submittedDateFrom" }),
        __metadata("design:type", Date)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "submittedDateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=submittedDateTo" }),
        __metadata("design:type", Date)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "submittedDateTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=transmissionType" }),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV4QueryParams.prototype, "transmissionType", void 0);
    return GetPaymentsForPayoutV4QueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutV4QueryParams = GetPaymentsForPayoutV4QueryParams;
var GetPaymentsForPayoutV4Request = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV4Request, _super);
    function GetPaymentsForPayoutV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentsForPayoutV4PathParams)
    ], GetPaymentsForPayoutV4Request.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentsForPayoutV4QueryParams)
    ], GetPaymentsForPayoutV4Request.prototype, "queryParams", void 0);
    return GetPaymentsForPayoutV4Request;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutV4Request = GetPaymentsForPayoutV4Request;
var GetPaymentsForPayoutV4Response = /** @class */ (function (_super) {
    __extends(GetPaymentsForPayoutV4Response, _super);
    function GetPaymentsForPayoutV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentsForPayoutV4Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetPaymentsForPayoutResponseV4)
    ], GetPaymentsForPayoutV4Response.prototype, "getPaymentsForPayoutResponseV4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentsForPayoutV4Response.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutV4Response.prototype, "inlineResponse400", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutV4Response.prototype, "inlineResponse401", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutV4Response.prototype, "inlineResponse403", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetPaymentsForPayoutV4Response.prototype, "inlineResponse404", void 0);
    return GetPaymentsForPayoutV4Response;
}(utils_1.SpeakeasyBase));
exports.GetPaymentsForPayoutV4Response = GetPaymentsForPayoutV4Response;

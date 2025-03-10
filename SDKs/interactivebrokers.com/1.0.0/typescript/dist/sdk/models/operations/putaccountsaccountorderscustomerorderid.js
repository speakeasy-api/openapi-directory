"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PutAccountsAccountOrdersCustomerOrderIdResponse = exports.PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON = exports.PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum = exports.PutAccountsAccountOrdersCustomerOrderIdRequest = exports.PutAccountsAccountOrdersCustomerOrderIdRequestBody = exports.PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * Buy = '1', Sell = '2'
 */
var PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum;
(function (PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum) {
    PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum["One"] = "1";
    PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum["Two"] = "2";
})(PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum = exports.PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum || (exports.PutAccountsAccountOrdersCustomerOrderIdRequestBodySideEnum = {}));
/**
 * Order Parameters
 */
var PutAccountsAccountOrdersCustomerOrderIdRequestBody = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderIdRequestBody, _super);
    function PutAccountsAccountOrdersCustomerOrderIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Aux Price" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "auxPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CustomerOrderId" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "customerOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "GermanHftAlgo" }),
        __metadata("design:type", Boolean)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "germanHftAlgo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Mifid2Algo" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2Algo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Mifid2DecisionMaker" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2DecisionMaker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Mifid2ExecutionAlgo" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2ExecutionAlgo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Mifid2ExecutionTrader" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2ExecutionTrader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Order Type" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "orderType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OrigCustomerOrderId" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "origCustomerOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Outside RTH" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "outsideRTH", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Price" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Quantity" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Side" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "side", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Time in Force" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "timeInForce", void 0);
    return PutAccountsAccountOrdersCustomerOrderIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutAccountsAccountOrdersCustomerOrderIdRequestBody = PutAccountsAccountOrdersCustomerOrderIdRequestBody;
var PutAccountsAccountOrdersCustomerOrderIdRequest = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderIdRequest, _super);
    function PutAccountsAccountOrdersCustomerOrderIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=CustomerOrderId",
        }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequest.prototype, "customerOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutAccountsAccountOrdersCustomerOrderIdRequestBody)
    ], PutAccountsAccountOrdersCustomerOrderIdRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=account",
        }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequest.prototype, "account", void 0);
    return PutAccountsAccountOrdersCustomerOrderIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutAccountsAccountOrdersCustomerOrderIdRequest = PutAccountsAccountOrdersCustomerOrderIdRequest;
var PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum;
(function (PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum) {
    PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum["One"] = "1";
    PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum["Two"] = "2";
})(PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum = exports.PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum || (exports.PutAccountsAccountOrdersCustomerOrderId200ApplicationJSONSideEnum = {}));
var PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON, _super);
    function PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CustomerOrderId" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "customerOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OrderQty" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "orderQty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OrderType" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "orderType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Price" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Side" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "side", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Status" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Symbol" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "symbol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Warning" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON.prototype, "warning", void 0);
    return PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON = PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON;
var PutAccountsAccountOrdersCustomerOrderIdResponse = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderIdResponse, _super);
    function PutAccountsAccountOrdersCustomerOrderIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutAccountsAccountOrdersCustomerOrderIdResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: PutAccountsAccountOrdersCustomerOrderId200ApplicationJSON,
        }),
        __metadata("design:type", Array)
    ], PutAccountsAccountOrdersCustomerOrderIdResponse.prototype, "putAccountsAccountOrdersCustomerOrderId200ApplicationJSONObjects", void 0);
    return PutAccountsAccountOrdersCustomerOrderIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutAccountsAccountOrdersCustomerOrderIdResponse = PutAccountsAccountOrdersCustomerOrderIdResponse;

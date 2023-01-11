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
exports.BulkRate = exports.BulkRateError = void 0;
var utils_1 = require("../../../internal/utils");
var errorcodeenum_1 = require("./errorcodeenum");
var errorsourceenum_1 = require("./errorsourceenum");
var errortypeenum_1 = require("./errortypeenum");
// BulkRateError
/**
 * The error structure that gets returned with almost all failed API calls
 *
**/
var BulkRateError = /** @class */ (function (_super) {
    __extends(BulkRateError, _super);
    function BulkRateError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_code" }),
        __metadata("design:type", String)
    ], BulkRateError.prototype, "errorCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_source" }),
        __metadata("design:type", String)
    ], BulkRateError.prototype, "errorSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_type" }),
        __metadata("design:type", String)
    ], BulkRateError.prototype, "errorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], BulkRateError.prototype, "message", void 0);
    return BulkRateError;
}(utils_1.SpeakeasyBase));
exports.BulkRateError = BulkRateError;
// BulkRate
/**
 * A bulk rate
**/
var BulkRate = /** @class */ (function (_super) {
    __extends(BulkRate, _super);
    function BulkRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Object)
    ], BulkRate.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: BulkRateError }),
        __metadata("design:type", Array)
    ], BulkRate.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate_request_id" }),
        __metadata("design:type", Object)
    ], BulkRate.prototype, "rateRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipment_id" }),
        __metadata("design:type", Object)
    ], BulkRate.prototype, "shipmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], BulkRate.prototype, "status", void 0);
    return BulkRate;
}(utils_1.SpeakeasyBase));
exports.BulkRate = BulkRate;

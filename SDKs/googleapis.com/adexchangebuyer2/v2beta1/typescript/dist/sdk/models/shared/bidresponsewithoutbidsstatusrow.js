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
exports.BidResponseWithoutBidsStatusRow = exports.BidResponseWithoutBidsStatusRowStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var metricvalue_1 = require("./metricvalue");
var rowdimensions_1 = require("./rowdimensions");
var BidResponseWithoutBidsStatusRowStatusEnum;
(function (BidResponseWithoutBidsStatusRowStatusEnum) {
    BidResponseWithoutBidsStatusRowStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    BidResponseWithoutBidsStatusRowStatusEnum["ResponsesWithoutBids"] = "RESPONSES_WITHOUT_BIDS";
    BidResponseWithoutBidsStatusRowStatusEnum["ResponsesWithoutBidsForAccount"] = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT";
    BidResponseWithoutBidsStatusRowStatusEnum["ResponsesWithoutBidsForDeal"] = "RESPONSES_WITHOUT_BIDS_FOR_DEAL";
})(BidResponseWithoutBidsStatusRowStatusEnum = exports.BidResponseWithoutBidsStatusRowStatusEnum || (exports.BidResponseWithoutBidsStatusRowStatusEnum = {}));
// BidResponseWithoutBidsStatusRow
/**
 * The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
**/
var BidResponseWithoutBidsStatusRow = /** @class */ (function (_super) {
    __extends(BidResponseWithoutBidsStatusRow, _super);
    function BidResponseWithoutBidsStatusRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=impressionCount" }),
        __metadata("design:type", metricvalue_1.MetricValue)
    ], BidResponseWithoutBidsStatusRow.prototype, "impressionCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rowDimensions" }),
        __metadata("design:type", rowdimensions_1.RowDimensions)
    ], BidResponseWithoutBidsStatusRow.prototype, "rowDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BidResponseWithoutBidsStatusRow.prototype, "status", void 0);
    return BidResponseWithoutBidsStatusRow;
}(utils_1.SpeakeasyBase));
exports.BidResponseWithoutBidsStatusRow = BidResponseWithoutBidsStatusRow;

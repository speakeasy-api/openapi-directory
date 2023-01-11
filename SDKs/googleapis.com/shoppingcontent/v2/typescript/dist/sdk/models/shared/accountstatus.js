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
exports.AccountStatus = void 0;
var utils_1 = require("../../../internal/utils");
var accountstatusaccountlevelissue_1 = require("./accountstatusaccountlevelissue");
var accountstatusdataqualityissue_1 = require("./accountstatusdataqualityissue");
var accountstatusproducts_1 = require("./accountstatusproducts");
// AccountStatus
/**
 * The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
**/
var AccountStatus = /** @class */ (function (_super) {
    __extends(AccountStatus, _super);
    function AccountStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AccountStatus.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountLevelIssues", elemType: accountstatusaccountlevelissue_1.AccountStatusAccountLevelIssue }),
        __metadata("design:type", Array)
    ], AccountStatus.prototype, "accountLevelIssues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataQualityIssues", elemType: accountstatusdataqualityissue_1.AccountStatusDataQualityIssue }),
        __metadata("design:type", Array)
    ], AccountStatus.prototype, "dataQualityIssues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AccountStatus.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=products", elemType: accountstatusproducts_1.AccountStatusProducts }),
        __metadata("design:type", Array)
    ], AccountStatus.prototype, "products", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websiteClaimed" }),
        __metadata("design:type", Boolean)
    ], AccountStatus.prototype, "websiteClaimed", void 0);
    return AccountStatus;
}(utils_1.SpeakeasyBase));
exports.AccountStatus = AccountStatus;

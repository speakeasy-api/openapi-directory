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
exports.UpdatePayeeDetailsRequest2Input = void 0;
var utils_1 = require("../../../internal/utils");
var payeeaddress2_1 = require("./payeeaddress2");
var challenge2_1 = require("./challenge2");
var company2_1 = require("./company2");
var individual2_1 = require("./individual2");
var payeetypeenum_1 = require("./payeetypeenum");
var UpdatePayeeDetailsRequest2Input = /** @class */ (function (_super) {
    __extends(UpdatePayeeDetailsRequest2Input, _super);
    function UpdatePayeeDetailsRequest2Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", payeeaddress2_1.PayeeAddress2)
    ], UpdatePayeeDetailsRequest2Input.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=challenge" }),
        __metadata("design:type", challenge2_1.Challenge2)
    ], UpdatePayeeDetailsRequest2Input.prototype, "challenge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", company2_1.Company2)
    ], UpdatePayeeDetailsRequest2Input.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UpdatePayeeDetailsRequest2Input.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=individual" }),
        __metadata("design:type", individual2_1.Individual2Input)
    ], UpdatePayeeDetailsRequest2Input.prototype, "individual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UpdatePayeeDetailsRequest2Input.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeType" }),
        __metadata("design:type", String)
    ], UpdatePayeeDetailsRequest2Input.prototype, "payeeType", void 0);
    return UpdatePayeeDetailsRequest2Input;
}(utils_1.SpeakeasyBase));
exports.UpdatePayeeDetailsRequest2Input = UpdatePayeeDetailsRequest2Input;

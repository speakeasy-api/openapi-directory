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
exports.Commission = exports.CommissionStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var monetary_1 = require("./monetary");
var project_1 = require("./project");
var class_transformer_1 = require("class-transformer");
var CommissionStatusEnum;
(function (CommissionStatusEnum) {
    CommissionStatusEnum["Completed"] = "completed";
    CommissionStatusEnum["Unclaimed"] = "unclaimed";
    CommissionStatusEnum["Failed"] = "failed";
    CommissionStatusEnum["Sent"] = "sent";
    CommissionStatusEnum["Waiting"] = "waiting";
    CommissionStatusEnum["WaitingInvoice"] = "waiting_invoice";
})(CommissionStatusEnum = exports.CommissionStatusEnum || (exports.CommissionStatusEnum = {}));
var Commission = /** @class */ (function (_super) {
    __extends(Commission, _super);
    function Commission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "amount" }),
        (0, class_transformer_1.Type)(function () { return monetary_1.Monetary; }),
        __metadata("design:type", monetary_1.Monetary)
    ], Commission.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], Commission.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "project" }),
        (0, class_transformer_1.Type)(function () { return project_1.Project; }),
        __metadata("design:type", project_1.Project)
    ], Commission.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], Commission.prototype, "status", void 0);
    return Commission;
}(utils_1.SpeakeasyBase));
exports.Commission = Commission;

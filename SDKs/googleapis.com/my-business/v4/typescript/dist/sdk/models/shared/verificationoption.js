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
exports.VerificationOption = exports.VerificationOptionVerificationMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var addressverificationdata_1 = require("./addressverificationdata");
var emailverificationdata_1 = require("./emailverificationdata");
var phoneverificationdata_1 = require("./phoneverificationdata");
var VerificationOptionVerificationMethodEnum;
(function (VerificationOptionVerificationMethodEnum) {
    VerificationOptionVerificationMethodEnum["VerificationMethodUnspecified"] = "VERIFICATION_METHOD_UNSPECIFIED";
    VerificationOptionVerificationMethodEnum["Address"] = "ADDRESS";
    VerificationOptionVerificationMethodEnum["Email"] = "EMAIL";
    VerificationOptionVerificationMethodEnum["PhoneCall"] = "PHONE_CALL";
    VerificationOptionVerificationMethodEnum["Sms"] = "SMS";
    VerificationOptionVerificationMethodEnum["Auto"] = "AUTO";
})(VerificationOptionVerificationMethodEnum = exports.VerificationOptionVerificationMethodEnum || (exports.VerificationOptionVerificationMethodEnum = {}));
// VerificationOption
/**
 * The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
**/
var VerificationOption = /** @class */ (function (_super) {
    __extends(VerificationOption, _super);
    function VerificationOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressData" }),
        __metadata("design:type", addressverificationdata_1.AddressVerificationData)
    ], VerificationOption.prototype, "addressData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailData" }),
        __metadata("design:type", emailverificationdata_1.EmailVerificationData)
    ], VerificationOption.prototype, "emailData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneData" }),
        __metadata("design:type", phoneverificationdata_1.PhoneVerificationData)
    ], VerificationOption.prototype, "phoneData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verificationMethod" }),
        __metadata("design:type", String)
    ], VerificationOption.prototype, "verificationMethod", void 0);
    return VerificationOption;
}(utils_1.SpeakeasyBase));
exports.VerificationOption = VerificationOption;

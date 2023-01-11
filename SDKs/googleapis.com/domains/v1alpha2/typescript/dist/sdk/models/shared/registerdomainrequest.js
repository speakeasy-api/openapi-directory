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
exports.RegisterDomainRequestInput = exports.RegisterDomainRequestDomainNoticesEnum = exports.RegisterDomainRequestContactNoticesEnum = void 0;
var utils_1 = require("../../../internal/utils");
var registration_1 = require("./registration");
var money_1 = require("./money");
var RegisterDomainRequestContactNoticesEnum;
(function (RegisterDomainRequestContactNoticesEnum) {
    RegisterDomainRequestContactNoticesEnum["ContactNoticeUnspecified"] = "CONTACT_NOTICE_UNSPECIFIED";
    RegisterDomainRequestContactNoticesEnum["PublicContactDataAcknowledgement"] = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT";
})(RegisterDomainRequestContactNoticesEnum = exports.RegisterDomainRequestContactNoticesEnum || (exports.RegisterDomainRequestContactNoticesEnum = {}));
var RegisterDomainRequestDomainNoticesEnum;
(function (RegisterDomainRequestDomainNoticesEnum) {
    RegisterDomainRequestDomainNoticesEnum["DomainNoticeUnspecified"] = "DOMAIN_NOTICE_UNSPECIFIED";
    RegisterDomainRequestDomainNoticesEnum["HstsPreloaded"] = "HSTS_PRELOADED";
})(RegisterDomainRequestDomainNoticesEnum = exports.RegisterDomainRequestDomainNoticesEnum || (exports.RegisterDomainRequestDomainNoticesEnum = {}));
// RegisterDomainRequestInput
/**
 * Request for the `RegisterDomain` method.
**/
var RegisterDomainRequestInput = /** @class */ (function (_super) {
    __extends(RegisterDomainRequestInput, _super);
    function RegisterDomainRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contactNotices" }),
        __metadata("design:type", Array)
    ], RegisterDomainRequestInput.prototype, "contactNotices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainNotices" }),
        __metadata("design:type", Array)
    ], RegisterDomainRequestInput.prototype, "domainNotices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration" }),
        __metadata("design:type", registration_1.RegistrationInput)
    ], RegisterDomainRequestInput.prototype, "registration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], RegisterDomainRequestInput.prototype, "validateOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=yearlyPrice" }),
        __metadata("design:type", money_1.Money)
    ], RegisterDomainRequestInput.prototype, "yearlyPrice", void 0);
    return RegisterDomainRequestInput;
}(utils_1.SpeakeasyBase));
exports.RegisterDomainRequestInput = RegisterDomainRequestInput;

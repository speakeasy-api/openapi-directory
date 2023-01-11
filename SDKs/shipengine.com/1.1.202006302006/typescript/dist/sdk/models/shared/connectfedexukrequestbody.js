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
exports.ConnectFedexUkRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
// ConnectFedexUkRequestBody
/**
 * A Fedex UK account information request body
**/
var ConnectFedexUkRequestBody = /** @class */ (function (_super) {
    __extends(ConnectFedexUkRequestBody, _super);
    function ConnectFedexUkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "address1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "address2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agree_to_eula" }),
        __metadata("design:type", Boolean)
    ], ConnectFedexUkRequestBody.prototype, "agreeToEula", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meter_number" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "meterNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ConnectFedexUkRequestBody.prototype, "state", void 0);
    return ConnectFedexUkRequestBody;
}(utils_1.SpeakeasyBase));
exports.ConnectFedexUkRequestBody = ConnectFedexUkRequestBody;

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
exports.ConnectFedexRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
// ConnectFedexRequestBody
/**
 * A Fedex account information request body
**/
var ConnectFedexRequestBody = /** @class */ (function (_super) {
    __extends(ConnectFedexRequestBody, _super);
    function ConnectFedexRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "address1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "address2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agree_to_eula" }),
        __metadata("design:type", Boolean)
    ], ConnectFedexRequestBody.prototype, "agreeToEula", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "company", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meter_number" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "meterNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ConnectFedexRequestBody.prototype, "state", void 0);
    return ConnectFedexRequestBody;
}(utils_1.SpeakeasyBase));
exports.ConnectFedexRequestBody = ConnectFedexRequestBody;

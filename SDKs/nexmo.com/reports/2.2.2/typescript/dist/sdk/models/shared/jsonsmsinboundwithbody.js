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
exports.JsonSmsInboundWithBody = void 0;
var utils_1 = require("../../../internal/utils");
// JsonSmsInboundWithBody
/**
 * Inbound SMS
**/
var JsonSmsInboundWithBody = /** @class */ (function (_super) {
    __extends(JsonSmsInboundWithBody, _super);
    function JsonSmsInboundWithBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "countryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_received" }),
        __metadata("design:type", Date)
    ], JsonSmsInboundWithBody.prototype, "dateReceived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", Object)
    ], JsonSmsInboundWithBody.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_body" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "messageBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_id" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "messageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "network", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=network_name" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "networkName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], JsonSmsInboundWithBody.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_price" }),
        __metadata("design:type", Number)
    ], JsonSmsInboundWithBody.prototype, "totalPrice", void 0);
    return JsonSmsInboundWithBody;
}(utils_1.SpeakeasyBase));
exports.JsonSmsInboundWithBody = JsonSmsInboundWithBody;

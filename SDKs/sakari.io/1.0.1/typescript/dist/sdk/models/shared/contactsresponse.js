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
exports.ContactsResponse = exports.ContactsResponsePagination = exports.ContactsResponseError = void 0;
var utils_1 = require("../../../internal/utils");
var contact_1 = require("./contact");
var ContactsResponseError = /** @class */ (function (_super) {
    __extends(ContactsResponseError, _super);
    function ContactsResponseError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ContactsResponseError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ContactsResponseError.prototype, "message", void 0);
    return ContactsResponseError;
}(utils_1.SpeakeasyBase));
exports.ContactsResponseError = ContactsResponseError;
var ContactsResponsePagination = /** @class */ (function (_super) {
    __extends(ContactsResponsePagination, _super);
    function ContactsResponsePagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], ContactsResponsePagination.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], ContactsResponsePagination.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], ContactsResponsePagination.prototype, "totalCount", void 0);
    return ContactsResponsePagination;
}(utils_1.SpeakeasyBase));
exports.ContactsResponsePagination = ContactsResponsePagination;
var ContactsResponse = /** @class */ (function (_super) {
    __extends(ContactsResponse, _super);
    function ContactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: contact_1.Contact }),
        __metadata("design:type", Array)
    ], ContactsResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", ContactsResponseError)
    ], ContactsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", ContactsResponsePagination)
    ], ContactsResponse.prototype, "pagination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], ContactsResponse.prototype, "success", void 0);
    return ContactsResponse;
}(utils_1.SpeakeasyBase));
exports.ContactsResponse = ContactsResponse;

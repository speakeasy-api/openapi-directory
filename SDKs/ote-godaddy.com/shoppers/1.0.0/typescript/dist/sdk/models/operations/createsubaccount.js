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
exports.CreateSubaccountResponse = exports.CreateSubaccountRequest = exports.CreateSubaccountRequests = void 0;
var utils_1 = require("../../../internal/utils");
var CreateSubaccountRequests = /** @class */ (function (_super) {
    __extends(CreateSubaccountRequests, _super);
    function CreateSubaccountRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], CreateSubaccountRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateSubaccountRequests.prototype, "subaccountCreate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], CreateSubaccountRequests.prototype, "textXML", void 0);
    return CreateSubaccountRequests;
}(utils_1.SpeakeasyBase));
exports.CreateSubaccountRequests = CreateSubaccountRequests;
var CreateSubaccountRequest = /** @class */ (function (_super) {
    __extends(CreateSubaccountRequest, _super);
    function CreateSubaccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSubaccountRequests)
    ], CreateSubaccountRequest.prototype, "request", void 0);
    return CreateSubaccountRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSubaccountRequest = CreateSubaccountRequest;
var CreateSubaccountResponse = /** @class */ (function (_super) {
    __extends(CreateSubaccountResponse, _super);
    function CreateSubaccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateSubaccountResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSubaccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSubaccountResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSubaccountResponse.prototype, "errorLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSubaccountResponse.prototype, "shopperId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSubaccountResponse.prototype, "statusCode", void 0);
    return CreateSubaccountResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSubaccountResponse = CreateSubaccountResponse;

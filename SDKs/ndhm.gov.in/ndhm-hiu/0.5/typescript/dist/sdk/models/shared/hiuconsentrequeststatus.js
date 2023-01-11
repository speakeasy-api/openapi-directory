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
exports.HiuConsentRequestStatus = exports.HiuConsentRequestStatusConsentRequest = void 0;
var utils_1 = require("../../../internal/utils");
var consentartefactreference_1 = require("./consentartefactreference");
var consentstatusenum_1 = require("./consentstatusenum");
var error_1 = require("./error");
var requestreference_1 = require("./requestreference");
var HiuConsentRequestStatusConsentRequest = /** @class */ (function (_super) {
    __extends(HiuConsentRequestStatusConsentRequest, _super);
    function HiuConsentRequestStatusConsentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtefacts", elemType: consentartefactreference_1.ConsentArtefactReference }),
        __metadata("design:type", Array)
    ], HiuConsentRequestStatusConsentRequest.prototype, "consentArtefacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HiuConsentRequestStatusConsentRequest.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HiuConsentRequestStatusConsentRequest.prototype, "status", void 0);
    return HiuConsentRequestStatusConsentRequest;
}(utils_1.SpeakeasyBase));
exports.HiuConsentRequestStatusConsentRequest = HiuConsentRequestStatusConsentRequest;
var HiuConsentRequestStatus = /** @class */ (function (_super) {
    __extends(HiuConsentRequestStatus, _super);
    function HiuConsentRequestStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentRequest" }),
        __metadata("design:type", HiuConsentRequestStatusConsentRequest)
    ], HiuConsentRequestStatus.prototype, "consentRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", error_1.ErrorT)
    ], HiuConsentRequestStatus.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], HiuConsentRequestStatus.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resp" }),
        __metadata("design:type", requestreference_1.RequestReference)
    ], HiuConsentRequestStatus.prototype, "resp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], HiuConsentRequestStatus.prototype, "timestamp", void 0);
    return HiuConsentRequestStatus;
}(utils_1.SpeakeasyBase));
exports.HiuConsentRequestStatus = HiuConsentRequestStatus;

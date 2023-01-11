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
exports.ConsentRequest = exports.ConsentRequestConsent = exports.ConsentRequestConsentPatient = exports.ConsentRequestConsentHiu = exports.ConsentRequestConsentHip = void 0;
var utils_1 = require("../../../internal/utils");
var carecontextdefinition_1 = require("./carecontextdefinition");
var permission_1 = require("./permission");
var usepurpose_1 = require("./usepurpose");
var requester_1 = require("./requester");
var ConsentRequestConsentHip = /** @class */ (function (_super) {
    __extends(ConsentRequestConsentHip, _super);
    function ConsentRequestConsentHip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConsentRequestConsentHip.prototype, "id", void 0);
    return ConsentRequestConsentHip;
}(utils_1.SpeakeasyBase));
exports.ConsentRequestConsentHip = ConsentRequestConsentHip;
var ConsentRequestConsentHiu = /** @class */ (function (_super) {
    __extends(ConsentRequestConsentHiu, _super);
    function ConsentRequestConsentHiu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConsentRequestConsentHiu.prototype, "id", void 0);
    return ConsentRequestConsentHiu;
}(utils_1.SpeakeasyBase));
exports.ConsentRequestConsentHiu = ConsentRequestConsentHiu;
var ConsentRequestConsentPatient = /** @class */ (function (_super) {
    __extends(ConsentRequestConsentPatient, _super);
    function ConsentRequestConsentPatient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConsentRequestConsentPatient.prototype, "id", void 0);
    return ConsentRequestConsentPatient;
}(utils_1.SpeakeasyBase));
exports.ConsentRequestConsentPatient = ConsentRequestConsentPatient;
var ConsentRequestConsent = /** @class */ (function (_super) {
    __extends(ConsentRequestConsent, _super);
    function ConsentRequestConsent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=careContexts", elemType: carecontextdefinition_1.CareContextDefinition }),
        __metadata("design:type", Array)
    ], ConsentRequestConsent.prototype, "careContexts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiTypes" }),
        __metadata("design:type", Array)
    ], ConsentRequestConsent.prototype, "hiTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hip" }),
        __metadata("design:type", ConsentRequestConsentHip)
    ], ConsentRequestConsent.prototype, "hip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiu" }),
        __metadata("design:type", ConsentRequestConsentHiu)
    ], ConsentRequestConsent.prototype, "hiu", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", ConsentRequestConsentPatient)
    ], ConsentRequestConsent.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permission" }),
        __metadata("design:type", permission_1.Permission)
    ], ConsentRequestConsent.prototype, "permission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purpose" }),
        __metadata("design:type", usepurpose_1.UsePurpose)
    ], ConsentRequestConsent.prototype, "purpose", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requester" }),
        __metadata("design:type", requester_1.Requester)
    ], ConsentRequestConsent.prototype, "requester", void 0);
    return ConsentRequestConsent;
}(utils_1.SpeakeasyBase));
exports.ConsentRequestConsent = ConsentRequestConsent;
var ConsentRequest = /** @class */ (function (_super) {
    __extends(ConsentRequest, _super);
    function ConsentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consent" }),
        __metadata("design:type", ConsentRequestConsent)
    ], ConsentRequest.prototype, "consent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ConsentRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], ConsentRequest.prototype, "timestamp", void 0);
    return ConsentRequest;
}(utils_1.SpeakeasyBase));
exports.ConsentRequest = ConsentRequest;

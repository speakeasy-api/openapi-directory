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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrunkResponse = exports.CreateTrunkRequest = exports.CreateTrunkSecurity = exports.CreateTrunkCreateTrunkRequest = exports.CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = exports.CreateTrunkServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateTrunkServerList = [
    "https://trunking.twilio.com",
];
var CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum;
(function (CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum) {
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Head"] = "HEAD";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Get"] = "GET";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Post"] = "POST";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Patch"] = "PATCH";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Put"] = "PUT";
    CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum["Delete"] = "DELETE";
})(CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = exports.CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum || (exports.CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum = {}));
var CreateTrunkCreateTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateTrunkCreateTrunkRequest, _super);
    function CreateTrunkCreateTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CnamLookupEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateTrunkCreateTrunkRequest.prototype, "cnamLookupEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DisasterRecoveryMethod;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "disasterRecoveryMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DisasterRecoveryUrl;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "disasterRecoveryUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=DomainName;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "domainName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Secure;" }),
        __metadata("design:type", Boolean)
    ], CreateTrunkCreateTrunkRequest.prototype, "secure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TransferCallerId;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "transferCallerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=TransferMode;" }),
        __metadata("design:type", String)
    ], CreateTrunkCreateTrunkRequest.prototype, "transferMode", void 0);
    return CreateTrunkCreateTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.CreateTrunkCreateTrunkRequest = CreateTrunkCreateTrunkRequest;
var CreateTrunkSecurity = /** @class */ (function (_super) {
    __extends(CreateTrunkSecurity, _super);
    function CreateTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateTrunkSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateTrunkSecurity = CreateTrunkSecurity;
var CreateTrunkRequest = /** @class */ (function (_super) {
    __extends(CreateTrunkRequest, _super);
    function CreateTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateTrunkRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTrunkCreateTrunkRequest)
    ], CreateTrunkRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTrunkSecurity)
    ], CreateTrunkRequest.prototype, "security", void 0);
    return CreateTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.CreateTrunkRequest = CreateTrunkRequest;
var CreateTrunkResponse = /** @class */ (function (_super) {
    __extends(CreateTrunkResponse, _super);
    function CreateTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TrunkingV1Trunk)
    ], CreateTrunkResponse.prototype, "trunkingV1Trunk", void 0);
    return CreateTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.CreateTrunkResponse = CreateTrunkResponse;

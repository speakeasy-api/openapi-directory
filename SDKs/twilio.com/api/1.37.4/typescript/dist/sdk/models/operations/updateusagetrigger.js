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
exports.UpdateUsageTriggerResponse = exports.UpdateUsageTriggerRequest = exports.UpdateUsageTriggerSecurity = exports.UpdateUsageTriggerUpdateUsageTriggerRequest = exports.UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum = exports.UpdateUsageTriggerPathParams = exports.UpdateUsageTriggerServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateUsageTriggerServerList = [
    "https://api.twilio.com",
];
var UpdateUsageTriggerPathParams = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerPathParams, _super);
    function UpdateUsageTriggerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerPathParams.prototype, "sid", void 0);
    return UpdateUsageTriggerPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUsageTriggerPathParams = UpdateUsageTriggerPathParams;
var UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum;
(function (UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum) {
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Head"] = "HEAD";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Get"] = "GET";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Post"] = "POST";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Patch"] = "PATCH";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Put"] = "PUT";
    UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum["Delete"] = "DELETE";
})(UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum = exports.UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum || (exports.UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum = {}));
var UpdateUsageTriggerUpdateUsageTriggerRequest = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerUpdateUsageTriggerRequest, _super);
    function UpdateUsageTriggerUpdateUsageTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerUpdateUsageTriggerRequest.prototype, "callbackMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerUpdateUsageTriggerRequest.prototype, "callbackUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUsageTriggerUpdateUsageTriggerRequest.prototype, "friendlyName", void 0);
    return UpdateUsageTriggerUpdateUsageTriggerRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUsageTriggerUpdateUsageTriggerRequest = UpdateUsageTriggerUpdateUsageTriggerRequest;
var UpdateUsageTriggerSecurity = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerSecurity, _super);
    function UpdateUsageTriggerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUsageTriggerSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUsageTriggerSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateUsageTriggerSecurity = UpdateUsageTriggerSecurity;
var UpdateUsageTriggerRequest = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerRequest, _super);
    function UpdateUsageTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUsageTriggerRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUsageTriggerPathParams)
    ], UpdateUsageTriggerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUsageTriggerUpdateUsageTriggerRequest)
    ], UpdateUsageTriggerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUsageTriggerSecurity)
    ], UpdateUsageTriggerRequest.prototype, "security", void 0);
    return UpdateUsageTriggerRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUsageTriggerRequest = UpdateUsageTriggerRequest;
var UpdateUsageTriggerResponse = /** @class */ (function (_super) {
    __extends(UpdateUsageTriggerResponse, _super);
    function UpdateUsageTriggerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUsageTriggerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUsageTriggerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiV2010AccountUsageUsageTrigger)
    ], UpdateUsageTriggerResponse.prototype, "apiV2010AccountUsageUsageTrigger", void 0);
    return UpdateUsageTriggerResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUsageTriggerResponse = UpdateUsageTriggerResponse;

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
exports.UpdateUnderstandFieldTypeResponse = exports.UpdateUnderstandFieldTypeRequest = exports.UpdateUnderstandFieldTypeSecurity = exports.UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest = exports.UpdateUnderstandFieldTypePathParams = exports.UpdateUnderstandFieldTypeServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateUnderstandFieldTypeServerList = [
    "https://preview.twilio.com",
];
var UpdateUnderstandFieldTypePathParams = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypePathParams, _super);
    function UpdateUnderstandFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypePathParams.prototype, "assistantSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypePathParams.prototype, "sid", void 0);
    return UpdateUnderstandFieldTypePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUnderstandFieldTypePathParams = UpdateUnderstandFieldTypePathParams;
var UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest, _super);
    function UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest.prototype, "uniqueName", void 0);
    return UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest = UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest;
var UpdateUnderstandFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeSecurity, _super);
    function UpdateUnderstandFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUnderstandFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUnderstandFieldTypeSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateUnderstandFieldTypeSecurity = UpdateUnderstandFieldTypeSecurity;
var UpdateUnderstandFieldTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeRequest, _super);
    function UpdateUnderstandFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUnderstandFieldTypePathParams)
    ], UpdateUnderstandFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest)
    ], UpdateUnderstandFieldTypeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUnderstandFieldTypeSecurity)
    ], UpdateUnderstandFieldTypeRequest.prototype, "security", void 0);
    return UpdateUnderstandFieldTypeRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUnderstandFieldTypeRequest = UpdateUnderstandFieldTypeRequest;
var UpdateUnderstandFieldTypeResponse = /** @class */ (function (_super) {
    __extends(UpdateUnderstandFieldTypeResponse, _super);
    function UpdateUnderstandFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUnderstandFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUnderstandFieldTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewUnderstandAssistantFieldType)
    ], UpdateUnderstandFieldTypeResponse.prototype, "previewUnderstandAssistantFieldType", void 0);
    return UpdateUnderstandFieldTypeResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUnderstandFieldTypeResponse = UpdateUnderstandFieldTypeResponse;

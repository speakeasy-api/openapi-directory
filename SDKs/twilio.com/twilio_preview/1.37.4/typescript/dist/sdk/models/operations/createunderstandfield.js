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
exports.CreateUnderstandFieldResponse = exports.CreateUnderstandFieldRequest = exports.CreateUnderstandFieldSecurity = exports.CreateUnderstandFieldCreateUnderstandFieldRequest = exports.CreateUnderstandFieldPathParams = exports.CreateUnderstandFieldServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateUnderstandFieldServerList = [
    "https://preview.twilio.com",
];
var CreateUnderstandFieldPathParams = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldPathParams, _super);
    function CreateUnderstandFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldPathParams.prototype, "assistantSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldPathParams.prototype, "taskSid", void 0);
    return CreateUnderstandFieldPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandFieldPathParams = CreateUnderstandFieldPathParams;
var CreateUnderstandFieldCreateUnderstandFieldRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldCreateUnderstandFieldRequest, _super);
    function CreateUnderstandFieldCreateUnderstandFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=FieldType;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldCreateUnderstandFieldRequest.prototype, "fieldType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateUnderstandFieldCreateUnderstandFieldRequest.prototype, "uniqueName", void 0);
    return CreateUnderstandFieldCreateUnderstandFieldRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandFieldCreateUnderstandFieldRequest = CreateUnderstandFieldCreateUnderstandFieldRequest;
var CreateUnderstandFieldSecurity = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldSecurity, _super);
    function CreateUnderstandFieldSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUnderstandFieldSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUnderstandFieldSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandFieldSecurity = CreateUnderstandFieldSecurity;
var CreateUnderstandFieldRequest = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldRequest, _super);
    function CreateUnderstandFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUnderstandFieldPathParams)
    ], CreateUnderstandFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUnderstandFieldCreateUnderstandFieldRequest)
    ], CreateUnderstandFieldRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUnderstandFieldSecurity)
    ], CreateUnderstandFieldRequest.prototype, "security", void 0);
    return CreateUnderstandFieldRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandFieldRequest = CreateUnderstandFieldRequest;
var CreateUnderstandFieldResponse = /** @class */ (function (_super) {
    __extends(CreateUnderstandFieldResponse, _super);
    function CreateUnderstandFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUnderstandFieldResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateUnderstandFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewUnderstandAssistantTaskField)
    ], CreateUnderstandFieldResponse.prototype, "previewUnderstandAssistantTaskField", void 0);
    return CreateUnderstandFieldResponse;
}(utils_1.SpeakeasyBase));
exports.CreateUnderstandFieldResponse = CreateUnderstandFieldResponse;

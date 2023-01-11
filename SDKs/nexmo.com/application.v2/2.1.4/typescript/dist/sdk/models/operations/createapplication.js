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
exports.CreateApplicationResponse = exports.CreateApplicationRequest = exports.CreateApplication201ApplicationJson = exports.CreateApplication201ApplicationJsonPrivacy = exports.CreateApplication201ApplicationJsonKeys = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateApplication201ApplicationJsonKeys = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonKeys, _super);
    function CreateApplication201ApplicationJsonKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_key" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonKeys.prototype, "privateKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonKeys.prototype, "publicKey", void 0);
    return CreateApplication201ApplicationJsonKeys;
}(utils_1.SpeakeasyBase));
exports.CreateApplication201ApplicationJsonKeys = CreateApplication201ApplicationJsonKeys;
// CreateApplication201ApplicationJsonPrivacy
/**
 * Application privacy config
**/
var CreateApplication201ApplicationJsonPrivacy = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonPrivacy, _super);
    function CreateApplication201ApplicationJsonPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=improve_ai" }),
        __metadata("design:type", Boolean)
    ], CreateApplication201ApplicationJsonPrivacy.prototype, "improveAi", void 0);
    return CreateApplication201ApplicationJsonPrivacy;
}(utils_1.SpeakeasyBase));
exports.CreateApplication201ApplicationJsonPrivacy = CreateApplication201ApplicationJsonPrivacy;
var CreateApplication201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJson, _super);
    function CreateApplication201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capabilities" }),
        __metadata("design:type", shared.Capabilities)
    ], CreateApplication201ApplicationJson.prototype, "capabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keys" }),
        __metadata("design:type", CreateApplication201ApplicationJsonKeys)
    ], CreateApplication201ApplicationJson.prototype, "keys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", CreateApplication201ApplicationJsonPrivacy)
    ], CreateApplication201ApplicationJson.prototype, "privacy", void 0);
    return CreateApplication201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateApplication201ApplicationJson = CreateApplication201ApplicationJson;
var CreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationRequest, _super);
    function CreateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateApplicationRequest.prototype, "request", void 0);
    return CreateApplicationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateApplicationRequest = CreateApplicationRequest;
var CreateApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateApplicationResponse, _super);
    function CreateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateApplication201ApplicationJson)
    ], CreateApplicationResponse.prototype, "createApplication201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication400ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication401ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication405ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication406ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication415ApplicationJSONAny", void 0);
    return CreateApplicationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateApplicationResponse = CreateApplicationResponse;

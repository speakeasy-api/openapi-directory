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
exports.CreateShopScriptTagResponse = exports.CreateShopScriptTagRequest = exports.CreateShopScriptTag200ApplicationJson = exports.CreateShopScriptTag200ApplicationJsonScriptTag = exports.CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.CreateShopScriptTagSecurity = exports.CreateShopScriptTagRequestBody = exports.CreateShopScriptTagRequestBodyScriptTag = exports.CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
(function (CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum) {
    CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum["Shop"] = "shop";
    CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = exports.CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum || (exports.CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = {}));
var CreateShopScriptTagRequestBodyScriptTag = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagRequestBodyScriptTag, _super);
    function CreateShopScriptTagRequestBodyScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateShopScriptTagRequestBodyScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], CreateShopScriptTagRequestBodyScriptTag.prototype, "integrity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], CreateShopScriptTagRequestBodyScriptTag.prototype, "src", void 0);
    return CreateShopScriptTagRequestBodyScriptTag;
}(utils_1.SpeakeasyBase));
exports.CreateShopScriptTagRequestBodyScriptTag = CreateShopScriptTagRequestBodyScriptTag;
var CreateShopScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagRequestBody, _super);
    function CreateShopScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", CreateShopScriptTagRequestBodyScriptTag)
    ], CreateShopScriptTagRequestBody.prototype, "scriptTag", void 0);
    return CreateShopScriptTagRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateShopScriptTagRequestBody = CreateShopScriptTagRequestBody;
var CreateShopScriptTagSecurity = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagSecurity, _super);
    function CreateShopScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], CreateShopScriptTagSecurity.prototype, "oAuth2", void 0);
    return CreateShopScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateShopScriptTagSecurity = CreateShopScriptTagSecurity;
var CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (exports.CreateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var CreateShopScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(CreateShopScriptTag200ApplicationJsonScriptTag, _super);
    function CreateShopScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "integrity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "oauthApplicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], CreateShopScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return CreateShopScriptTag200ApplicationJsonScriptTag;
}(utils_1.SpeakeasyBase));
exports.CreateShopScriptTag200ApplicationJsonScriptTag = CreateShopScriptTag200ApplicationJsonScriptTag;
var CreateShopScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateShopScriptTag200ApplicationJson, _super);
    function CreateShopScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", CreateShopScriptTag200ApplicationJsonScriptTag)
    ], CreateShopScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return CreateShopScriptTag200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateShopScriptTag200ApplicationJson = CreateShopScriptTag200ApplicationJson;
var CreateShopScriptTagRequest = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagRequest, _super);
    function CreateShopScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateShopScriptTagRequestBody)
    ], CreateShopScriptTagRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateShopScriptTagSecurity)
    ], CreateShopScriptTagRequest.prototype, "security", void 0);
    return CreateShopScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.CreateShopScriptTagRequest = CreateShopScriptTagRequest;
var CreateShopScriptTagResponse = /** @class */ (function (_super) {
    __extends(CreateShopScriptTagResponse, _super);
    function CreateShopScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateShopScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateShopScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateShopScriptTag200ApplicationJson)
    ], CreateShopScriptTagResponse.prototype, "createShopScriptTag200ApplicationJSONObject", void 0);
    return CreateShopScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.CreateShopScriptTagResponse = CreateShopScriptTagResponse;

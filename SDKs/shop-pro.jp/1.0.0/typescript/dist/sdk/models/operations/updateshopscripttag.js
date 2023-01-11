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
exports.UpdateShopScriptTagResponse = exports.UpdateShopScriptTagRequest = exports.UpdateShopScriptTag200ApplicationJson = exports.UpdateShopScriptTag200ApplicationJsonScriptTag = exports.UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.UpdateShopScriptTagSecurity = exports.UpdateShopScriptTagRequestBody = exports.UpdateShopScriptTagRequestBodyScriptTag = exports.UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = exports.UpdateShopScriptTagPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateShopScriptTagPathParams = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTagPathParams, _super);
    function UpdateShopScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], UpdateShopScriptTagPathParams.prototype, "scriptTagId", void 0);
    return UpdateShopScriptTagPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTagPathParams = UpdateShopScriptTagPathParams;
var UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
(function (UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum) {
    UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum["Shop"] = "shop";
    UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = exports.UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum || (exports.UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = {}));
var UpdateShopScriptTagRequestBodyScriptTag = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTagRequestBodyScriptTag, _super);
    function UpdateShopScriptTagRequestBodyScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateShopScriptTagRequestBodyScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], UpdateShopScriptTagRequestBodyScriptTag.prototype, "integrity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], UpdateShopScriptTagRequestBodyScriptTag.prototype, "src", void 0);
    return UpdateShopScriptTagRequestBodyScriptTag;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTagRequestBodyScriptTag = UpdateShopScriptTagRequestBodyScriptTag;
var UpdateShopScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTagRequestBody, _super);
    function UpdateShopScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", UpdateShopScriptTagRequestBodyScriptTag)
    ], UpdateShopScriptTagRequestBody.prototype, "scriptTag", void 0);
    return UpdateShopScriptTagRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTagRequestBody = UpdateShopScriptTagRequestBody;
var UpdateShopScriptTagSecurity = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTagSecurity, _super);
    function UpdateShopScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UpdateShopScriptTagSecurity.prototype, "oAuth2", void 0);
    return UpdateShopScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTagSecurity = UpdateShopScriptTagSecurity;
var UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
})(UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (exports.UpdateShopScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var UpdateShopScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTag200ApplicationJsonScriptTag, _super);
    function UpdateShopScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrity" }),
        __metadata("design:type", String)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "integrity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "oauthApplicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], UpdateShopScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return UpdateShopScriptTag200ApplicationJsonScriptTag;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTag200ApplicationJsonScriptTag = UpdateShopScriptTag200ApplicationJsonScriptTag;
var UpdateShopScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTag200ApplicationJson, _super);
    function UpdateShopScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", UpdateShopScriptTag200ApplicationJsonScriptTag)
    ], UpdateShopScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return UpdateShopScriptTag200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTag200ApplicationJson = UpdateShopScriptTag200ApplicationJson;
var UpdateShopScriptTagRequest = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTagRequest, _super);
    function UpdateShopScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateShopScriptTagPathParams)
    ], UpdateShopScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateShopScriptTagRequestBody)
    ], UpdateShopScriptTagRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateShopScriptTagSecurity)
    ], UpdateShopScriptTagRequest.prototype, "security", void 0);
    return UpdateShopScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTagRequest = UpdateShopScriptTagRequest;
var UpdateShopScriptTagResponse = /** @class */ (function (_super) {
    __extends(UpdateShopScriptTagResponse, _super);
    function UpdateShopScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateShopScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateShopScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateShopScriptTag200ApplicationJson)
    ], UpdateShopScriptTagResponse.prototype, "updateShopScriptTag200ApplicationJSONObject", void 0);
    return UpdateShopScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateShopScriptTagResponse = UpdateShopScriptTagResponse;

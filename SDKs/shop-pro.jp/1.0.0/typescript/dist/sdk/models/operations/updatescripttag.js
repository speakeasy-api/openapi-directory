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
exports.UpdateScriptTagResponse = exports.UpdateScriptTagRequest = exports.UpdateScriptTag200ApplicationJson = exports.UpdateScriptTag200ApplicationJsonScriptTag = exports.UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.UpdateScriptTagSecurity = exports.UpdateScriptTagRequestBody = exports.UpdateScriptTagRequestBodyScriptTag = exports.UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = exports.UpdateScriptTagPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateScriptTagPathParams = /** @class */ (function (_super) {
    __extends(UpdateScriptTagPathParams, _super);
    function UpdateScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], UpdateScriptTagPathParams.prototype, "scriptTagId", void 0);
    return UpdateScriptTagPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTagPathParams = UpdateScriptTagPathParams;
var UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;
(function (UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum) {
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["All"] = "all";
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["Shop"] = "shop";
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum["Cart"] = "cart";
})(UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = exports.UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum || (exports.UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum = {}));
var UpdateScriptTagRequestBodyScriptTag = /** @class */ (function (_super) {
    __extends(UpdateScriptTagRequestBodyScriptTag, _super);
    function UpdateScriptTagRequestBodyScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateScriptTagRequestBodyScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], UpdateScriptTagRequestBodyScriptTag.prototype, "src", void 0);
    return UpdateScriptTagRequestBodyScriptTag;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTagRequestBodyScriptTag = UpdateScriptTagRequestBodyScriptTag;
var UpdateScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(UpdateScriptTagRequestBody, _super);
    function UpdateScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", UpdateScriptTagRequestBodyScriptTag)
    ], UpdateScriptTagRequestBody.prototype, "scriptTag", void 0);
    return UpdateScriptTagRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTagRequestBody = UpdateScriptTagRequestBody;
var UpdateScriptTagSecurity = /** @class */ (function (_super) {
    __extends(UpdateScriptTagSecurity, _super);
    function UpdateScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UpdateScriptTagSecurity.prototype, "oAuth2", void 0);
    return UpdateScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTagSecurity = UpdateScriptTagSecurity;
var UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["All"] = "all";
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Cart"] = "cart";
})(UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (exports.UpdateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var UpdateScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(UpdateScriptTag200ApplicationJsonScriptTag, _super);
    function UpdateScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], UpdateScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return UpdateScriptTag200ApplicationJsonScriptTag;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTag200ApplicationJsonScriptTag = UpdateScriptTag200ApplicationJsonScriptTag;
var UpdateScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateScriptTag200ApplicationJson, _super);
    function UpdateScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", UpdateScriptTag200ApplicationJsonScriptTag)
    ], UpdateScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return UpdateScriptTag200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTag200ApplicationJson = UpdateScriptTag200ApplicationJson;
var UpdateScriptTagRequest = /** @class */ (function (_super) {
    __extends(UpdateScriptTagRequest, _super);
    function UpdateScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateScriptTagPathParams)
    ], UpdateScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateScriptTagRequestBody)
    ], UpdateScriptTagRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateScriptTagSecurity)
    ], UpdateScriptTagRequest.prototype, "security", void 0);
    return UpdateScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTagRequest = UpdateScriptTagRequest;
var UpdateScriptTagResponse = /** @class */ (function (_super) {
    __extends(UpdateScriptTagResponse, _super);
    function UpdateScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateScriptTag200ApplicationJson)
    ], UpdateScriptTagResponse.prototype, "updateScriptTag200ApplicationJSONObject", void 0);
    return UpdateScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateScriptTagResponse = UpdateScriptTagResponse;
